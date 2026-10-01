import test from "node:test";
import assert from "node:assert/strict";
import { prisma } from "../src/lib/prisma.js";
import { nearbySearchSchema, nearbyAddSchema } from "../src/validations/nearby.js";
import { searchNearbyService, addNearbyActivityService } from "../src/services/nearby.service.js";
import { fetchNearbyPlaces } from "../src/services/nearby-provider.js";
import { orderDayActivities, insertedActivityOrder } from "../src/services/activity-order.js";
const place={name:"Cafe",latitude:13.7565,longitude:100.5018,category:"restaurant"};
const input={radiusKm:1,category:"restaurant",limit:3,language:"en",latitude:13.7563,longitude:100.5018};
test("nearby schemas bound radius/count/categories/coordinates and require valid insertion",()=>{
  assert.equal(nearbySearchSchema.safeParse(input).success,true);
  for(const patch of [{radiusKm:0},{radiusKm:6},{radiusKm:1.5},{limit:6},{category:"script"},{latitude:91},{longitude:181},{rawQuery:"query"}])assert.equal(nearbySearchSchema.safeParse({...input,...patch}).success,false);
  assert.equal(nearbySearchSchema.safeParse({radiusKm:1,category:"hotel",latitude:1}).success,false);
  assert.equal(nearbyAddSchema.safeParse({dayId:1,place}).success,true);
  assert.equal(nearbyAddSchema.safeParse({dayId:1,place,placement:"after"}).success,false);
  assert.equal(nearbyAddSchema.safeParse({dayId:1,place,placement:"before",anchorActivityId:3}).success,true);
});
test("search verifies access before provider use and uses saved pin before client fallback",async()=>{
  const find=prisma.activity.findFirst;let exists=false,calls=0;
  prisma.activity.findFirst=async({where})=>{assert.ok(where.day.trip.OR);return exists?{latitude:0,longitude:0,locationName:"Source"}:null;};
  try {
    await assert.rejects(searchNearbyService(1,7,input,()=>{calls++;}),{status:404});assert.equal(calls,0);
    exists=true;await searchNearbyService(1,7,input,async v=>{assert.equal(v.latitude,0);assert.equal(v.longitude,0);calls++;return {};});assert.equal(calls,1);
    prisma.activity.findFirst=async()=>({latitude:null,longitude:null});
    await assert.rejects(searchNearbyService(1,7,{radiusKm:1,category:"hotel"},()=>{calls++;}),{status:422});assert.equal(calls,1);
  }finally{prisma.activity.findFirst=find;}
});
test("OSM returns real radius-bounded deduplicated places with notability and no invented ratings",async()=>{
  const element=(id,name,lat=13.7565,tags={})=>({id,type:"node",lat,lon:100.5018,tags:{name,amenity:"restaurant",...tags}});
  const result=await fetchNearbyPlaces(input,async(url,options)=>{
    assert.equal(url,"https://overpass-api.de/api/interpreter");assert.match(new URLSearchParams(options.body).get("data"),/around:1000/);
    return {ok:true,json:async()=>({elements:[element(1,"Near"),element(2,"Known",13.757,{wikipedia:"en:Known"}),element(3,"Far",14),element(4,"Near"),element(5,"Invalid",91)]})};
  },"");
  assert.equal(result.provider,"osm");assert.deepEqual(result.places.map(p=>p.name),["Known","Near"]);assert.ok(result.places.every(p=>p.distanceMeters<=1000&&p.rating===null));
  await assert.rejects(fetchNearbyPlaces(input,async()=>({ok:true,json:async()=>({remark:"timeout",elements:[]})}),""),{status:503});
  await assert.rejects(fetchNearbyPlaces(input,async()=>({ok:false,status:429}),""),{status:429});
});
test("Google search requests popularity and returns actual rating fields without key exposure",async()=>{
  const result=await fetchNearbyPlaces(input,async(url,options)=>{
    assert.equal(url,"https://places.googleapis.com/v1/places:searchNearby");
    const body=JSON.parse(options.body);assert.equal(body.rankPreference,"POPULARITY");assert.equal(body.locationRestriction.circle.radius,1000);assert.deepEqual(body.includedTypes,["restaurant"]);
    return {ok:true,json:async()=>({places:[{id:"google-place",displayName:{text:"Cafe"},location:{latitude:place.latitude,longitude:place.longitude},rating:4.6,userRatingCount:200},{id:"closed",displayName:{text:"Closed"},location:{latitude:place.latitude,longitude:place.longitude},businessStatus:"CLOSED_PERMANENTLY"}]})};
  },"test-key");
  assert.equal(result.ranking,"popularity");assert.equal(result.places.length,1);assert.equal(result.places[0].rating,4.6);assert.equal(JSON.stringify(result).includes("test-key"),false);
});
test("custom insertion keeps original orders until chosen, survives missing IDs and appends unknown activities",()=>{
  const day={activities:[{id:3},{id:1},{id:2}]};assert.deepEqual(orderDayActivities(day).activities,day.activities);
  assert.deepEqual(insertedActivityOrder(day,4,"before",1),[3,4,1,2]);
  assert.deepEqual(insertedActivityOrder(day,4,"after",1),[3,1,4,2]);
  assert.deepEqual(insertedActivityOrder(day,4,"end",null),[3,1,2,4]);
  assert.equal(insertedActivityOrder(day,4,"after",99),null);
  const result=orderDayActivities({...day,activityOrder:[2,99,3]});assert.deepEqual(result.activities.map(a=>a.id),[2,3,1]);assert.equal("activityOrder" in result,false);
});
test("nearby creation authorizes source and same-trip destination, locks before reading order and rejects stale anchor",async()=>{
  const transaction=prisma.$transaction;let permitted=true,dayExists=true,locked=false,writes=0,record,order;
  const tx={
    $queryRaw:async()=>{locked=true;},
    activity:{findFirst:async({where})=>{assert.ok(where.day.trip.OR);return permitted?{day:{tripId:7}}:null;},create:async({data})=>{writes++;record=data;return {id:4,...data};}},
    day:{findFirst:async({where})=>{assert.equal(where.tripId,7);return dayExists?{id:1}:null;},findUnique:async()=>{assert.ok(locked);return {id:1,dayDate:new Date("2026-10-01"),activities:[{id:3},{id:1},{id:2}],activityOrder:null};},update:async({data})=>{order=data.activityOrder;}}
  };
  prisma.$transaction=async fn=>fn(tx);
  try{
    await addNearbyActivityService(3,9,{dayId:1,place,placement:"after",anchorActivityId:1});assert.deepEqual(order,[3,1,4,2]);assert.equal(record.activityTime,null);assert.equal(record.activityType,"RESTAURANT");
    await assert.rejects(addNearbyActivityService(3,9,{dayId:1,place,placement:"before",anchorActivityId:99}),{status:409});assert.equal(writes,1);
    permitted=false;await assert.rejects(addNearbyActivityService(3,9,{dayId:1,place,placement:"end"}),{status:404});assert.equal(writes,1);
    permitted=true;dayExists=false;await assert.rejects(addNearbyActivityService(3,9,{dayId:9,place,placement:"end"}),{status:404});assert.equal(writes,1);
  }finally{prisma.$transaction=transaction;}
});

test("normal creation retains custom insertion order and leaves untouched days on original ordering",async()=>{
  const { createActivityService } = await import("../src/services/activities.service.js");
  const transaction=prisma.$transaction;let activityOrder=null,lastUpdate=null,created;
  const tx={
    $queryRaw:async()=>{},
    day:{findFirst:async()=>({id:1}),findUnique:async()=>({activityOrder}),update:async({data})=>{lastUpdate=data;}},
    activity:{count:async()=>2,create:async({data})=>{created=data;return {id:3,...data};}}
  };
  prisma.$transaction=fn=>fn(tx);
  try{
    await createActivityService(7,{dayId:1,locationName:"New",activityTime:"1970-01-01T10:00:00Z",manualWeather:{temperatureC:0}});
    assert.equal(lastUpdate,null);assert.equal(created.activityTime.toISOString(),"1970-01-01T10:00:00.000Z");assert.equal(created.manualWeather.temperatureC,0);
    activityOrder=[2,1];await createActivityService(7,{dayId:1,locationName:"New"});assert.deepEqual(lastUpdate.activityOrder,[2,1,3]);
  }finally{prisma.$transaction=transaction;}
});
