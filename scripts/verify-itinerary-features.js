// Opt-in PostgreSQL smoke: temporary fixtures inside one rolled-back transaction.
// No existing itinerary rows are modified. Sequence IDs may have gaps after rollback.
import assert from "node:assert/strict";
import { prisma } from "../src/lib/prisma.js";
import { addNearbyActivityService } from "../src/services/nearby.service.js";
import { createActivityService } from "../src/services/activities.service.js";
import { manualWeatherWrite } from "../src/services/manual-weather.js";
import { dayCreateSchema } from "../src/validations/schema.js";
import { orderDayActivities } from "../src/services/activity-order.js";
const rollback = new Error("VERIFICATION_ROLLBACK");
const transaction = prisma.$transaction.bind(prisma);
let verified=false;
try {
  const user = await prisma.user.findFirst({select:{id:true}});
  if(!user) throw new Error("Verification needs an existing account as foreign-key parent");
  try {
    await transaction(async tx=>{
      prisma.$transaction=fn=>fn(tx);
      const trip=await tx.trip.create({data:{userId:user.id,tripName:"Temporary itinerary verification"}});
      const observation=dayCreateSchema.parse({manualWeather:{condition:"snow",temperatureC:-3.5,descriptionCode:"cold",description:"test"}}).manualWeather;
      const day=await tx.day.create({data:{tripId:trip.id,dayCount:1,dayDate:new Date("2026-10-01"),manualWeather:observation}});
      const first=await tx.activity.create({data:{dayId:day.id,locationName:"Temporary source",activityTime:new Date("1970-01-01T09:00:00Z"),latitude:13.7563,longitude:100.5018,manualWeather:{temperatureC:0}}});
      const last=await tx.activity.create({data:{dayId:day.id,locationName:"Temporary later",activityTime:new Date("1970-01-01T11:00:00Z")}});
      const inserted=await addNearbyActivityService(first.id,user.id,{dayId:day.id,placement:"before",anchorActivityId:last.id,place:{name:"Temporary nearby cafe",latitude:13.7565,longitude:100.5018,category:"restaurant"}});
      const appended=await createActivityService(user.id,{dayId:day.id,locationName:"Temporary appended",activityTime:"1970-01-01T08:00:00Z"});
      let saved=await tx.day.findUnique({where:{id:day.id},include:{activities:{orderBy:{activityTime:"asc"}}}});
      assert.deepEqual(orderDayActivities(saved).activities.map(a=>a.id),[first.id,inserted.id,last.id,appended.id]);
      assert.equal(saved.manualWeather.temperatureC,-3.5);
      assert.equal(saved.activities.find(a=>a.id===first.id).manualWeather.temperatureC,0);
      await tx.day.update({where:{id:day.id},data:manualWeatherWrite({manualWeather:null})});
      saved=await tx.day.findUnique({where:{id:day.id}});assert.equal(saved.manualWeather,null);
      verified=true;throw rollback;
    },{timeout:15000});
  } catch(error) { if(error!==rollback) throw error; }
  assert.ok(verified);
  console.log("PostgreSQL verified: manual weather round-trip/clear, nearby insertion, normal append. Temporary fixtures rolled back.");
} catch(error) {
  console.error("Itinerary verification failed:",error.code||error.name);process.exitCode=1;
} finally { prisma.$transaction=transaction; await prisma.$disconnect(); }
