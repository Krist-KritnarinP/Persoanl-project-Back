import z from "zod";
export const WEATHER_CONDITIONS = ["clear", "sunny", "partly_cloudy", "mostly_cloudy", "overcast", "drizzle", "rain", "showers", "heavy_rain", "thunderstorm", "snow", "heavy_snow", "rain_snow", "sleet", "freezing_rain", "hail", "fog", "haze", "windy", "dust", "smoke", "other"];
export const WEATHER_DESCRIPTIONS = ["comfortable", "hot", "very_hot", "cool", "cold", "freezing", "humid", "dry", "light_breeze", "gusts", "calm", "intermittent_rain", "low_visibility", "slippery", "changing"];
export const manualWeatherSchema = z.object({
  condition: z.enum(WEATHER_CONDITIONS).nullable().default(null),
  temperatureC: z.number().finite().min(-100).max(70).nullable().default(null),
  descriptionCode: z.enum(WEATHER_DESCRIPTIONS).nullable().default(null),
  description: z.string().trim().max(1000).default(""),
}).strict().transform((value) => value.condition || value.temperatureC !== null || value.descriptionCode || value.description ? value : null).nullable().optional();
