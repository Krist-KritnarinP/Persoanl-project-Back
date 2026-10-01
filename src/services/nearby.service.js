import createError from "http-errors";
import { prisma } from "../lib/prisma.js";
import { tripAccessWhere } from "./trip-access.js";
import { fetchNearbyPlaces } from "./nearby-provider.js";
import { insertedActivityOrder } from "./activity-order.js";
import { withCreationLimit, enforceLimit } from "../security/quotas.js";
const validCoords=(lat,lng)=> typeof lat==="number" && Number.isFinite(lat) && Math.abs(lat)<=90 && typeof lng==="number" && Number.isFinite(lng) && Math.abs(lng)<=180;
export async function searchNearbyService(activityId,userId,input,provider=fetchNearbyPlaces) {
  const activity=await prisma.activity.findFirst({where:{id:Number(activityId),day:{trip:tripAccessWhere(userId)}}});
  if(!activity) throw createError(404,"Activity not found or unauthorized");
  const latitude=validCoords(activity.latitude,activity.longitude)?activity.latitude:input.latitude;
  const longitude=validCoords(activity.latitude,activity.longitude)?activity.longitude:input.longitude;
  if(!validCoords(latitude,longitude)) throw createError(422,"Activity coordinates required");
  return provider({...input,latitude,longitude,sourceName:activity.locationName});
}
export async function addNearbyActivityService(activityId,userId,input) {
  return withCreationLimit(userId,async tx=>{
    const source=await tx.activity.findFirst({where:{id:Number(activityId),day:{trip:tripAccessWhere(userId,"editor")}},select:{day:{select:{tripId:true}}}});
    if(!source) throw createError(404,"Activity not found or unauthorized");
    const accessible=await tx.day.findFirst({where:{id:input.dayId,tripId:source.day.tripId,trip:tripAccessWhere(userId,"editor")},select:{id:true}});
    if(!accessible) throw createError(404,"Day not found or unauthorized");
    // Serialize insertion with normal creation for this day; read order after locking.
    await tx.$queryRaw`SELECT day_id FROM days WHERE day_id = ${input.dayId} FOR UPDATE`;
    const day=await tx.day.findUnique({where:{id:input.dayId},include:{activities:{orderBy:{activityTime:"asc"}}}});
    if(input.placement!=="end" && !day.activities.some(a=>a.id===input.anchorActivityId)) throw createError(409,"Insertion activity no longer belongs to this day");
    enforceLimit(day.activities.length,100);
    const type={restaurant:"RESTAURANT",hotel:"ACCOMMODATION",attraction:"ATTRACTION",park:"ATTRACTION"}[input.place.category];
    const activity=await tx.activity.create({data:{dayId:day.id,locationName:input.place.name,activityType:type,activityDate:day.dayDate,activityTime:null,price:0,status:"planned",latitude:input.place.latitude,longitude:input.place.longitude}});
    await tx.day.update({where:{id:day.id},data:{activityOrder:insertedActivityOrder(day,activity.id,input.placement,input.anchorActivityId)}});
    return activity;
  });
}
