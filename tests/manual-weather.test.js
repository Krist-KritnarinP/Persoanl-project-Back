import test from "node:test";
import assert from "node:assert/strict";
import { dayCreateSchema, dayUpdateSchema, activityCreateSchema, activityUpdateSchema } from "../src/validations/schema.js";
import { manualWeatherWrite } from "../src/services/manual-weather.js";
import { Prisma } from "../src/generated/prisma/client.js";
import { prisma } from "../src/lib/prisma.js";
import { updateDayService } from "../src/services/days.service.js";
import { updateActivityService } from "../src/services/activities.service.js";
const weather = { condition: "snow", temperatureC: -3.5, descriptionCode: "cold", description: " Snow on the path " };
test("weather input works at both levels, preserves zero and permits partial/cleared records", () => {
  for (const [schema,base] of [[dayCreateSchema,{}],[dayUpdateSchema,{}],[activityCreateSchema,{dayId:1,locationName:"Park"}],[activityUpdateSchema,{}]]) {
    assert.equal(schema.parse({...base,manualWeather:weather}).manualWeather.description,"Snow on the path");
    assert.equal(schema.parse({...base,manualWeather:{temperatureC:0}}).manualWeather.temperatureC,0);
    assert.equal(schema.parse({...base,manualWeather:{}}).manualWeather,null);
    assert.equal(schema.parse({...base,manualWeather:null}).manualWeather,null);
    assert.equal(schema.parse(base).manualWeather,undefined);
    for (const invalid of [{temperatureC:""},{temperatureC:"12"},{temperatureC:71},{temperatureC:-101},{temperatureC:Infinity},{condition:"made_up"},{descriptionCode:"made_up"},{description:"x".repeat(1001)},{privateUserId:99}]) {
      assert.equal(schema.safeParse({...base,manualWeather:invalid}).success,false);
    }
  }
  assert.deepEqual(manualWeatherWrite({}),{});
  assert.equal(manualWeatherWrite({manualWeather:null}).manualWeather,Prisma.DbNull);
});
test("day and activity updates retain access checks, omit unchanged weather and explicitly clear it", async () => {
  for (const [model,update,nested] of [[prisma.day,updateDayService,"trip"],[prisma.activity,updateActivityService,"day"]]) {
    const find=model.findFirst,write=model.update; let authorized=true,writes=[];
    model.findFirst=async({where})=>{ assert.ok(where[nested]); return authorized?{id:1}:null; };
    model.update=async({data})=>{writes.push(data);return data;};
    try {
      await update(1,7,{description:"Changed"});assert.equal("manualWeather" in writes[0],false);
      await update(1,7,{manualWeather:weather});assert.deepEqual(writes[1].manualWeather,weather);
      await update(1,7,{manualWeather:null});assert.equal(writes[2].manualWeather,Prisma.DbNull);
      authorized=false;assert.equal(await update(1,7,{manualWeather:weather}),null);assert.equal(writes.length,3);
    } finally {model.findFirst=find;model.update=write;}
  }
});
