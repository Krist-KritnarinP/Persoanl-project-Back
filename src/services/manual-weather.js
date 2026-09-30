import { Prisma } from "../generated/prisma/client.js";

// Omitted fields preserve prior observations; explicit null clears the JSON column.
export function manualWeatherWrite(input) {
  return input.manualWeather === undefined ? {} : {
    manualWeather: input.manualWeather === null ? Prisma.DbNull : input.manualWeather,
  };
}
