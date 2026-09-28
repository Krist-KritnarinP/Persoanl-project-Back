import test from "node:test";
import assert from "node:assert/strict";
import { buildWeatherPrompt } from "../src/services/weather-prompt.js";
const activity = {
  locationName: "Mountain Park",
  activityTime: new Date("1970-01-01T09:00:00Z"),
  activityType: "ATTRACTION",
  description: "private note never send",
  price: 123456,
};
const trip = {
  destination: "Example city",
  startDate: "2027-01-01",
  endDate: "2027-01-02",
  days: [
    { dayCount: 2, dayDate: "2027-01-02", activities: [activity] },
    {
      dayCount: 1,
      dayDate: "2027-01-01",
      activities: [
        activity,
        {
          ...activity,
          activityTime: "15:00",
          activityType: "TRANSPORT",
          description: "15:00–17:30 flight",
        },
      ],
    },
  ],
};
test("compact weather prompt deduplicates places and preserves dates, periods and arrival times", () => {
  const { prompt, maxOutputTokens } = buildWeatherPrompt(trip, "en");
  assert.equal(prompt.match(/Mountain Park/g).length, 1);
  assert.ok(prompt.indexOf("D1 2027-01-01") < prompt.indexOf("D2 2027-01-02"));
  assert.match(prompt, /09:00 visit P1/);
  assert.match(prompt, /15:00-17:30 travel P1/);
  assert.match(prompt, /morning, afternoon and evening/);
  assert.match(prompt, /NOT a live forecast/);
  assert.doesNotMatch(prompt, /private note|123456/);
  assert.ok(prompt.length < 2200);
  assert.equal(maxOutputTokens, 1800);
});
test("prompt language and output budget stay bounded; oversized input fails before provider use", () => {
  for (const [lang, name] of Object.entries({
    th: "Thai",
    en: "English",
    zh: "Simplified Chinese",
    ko: "Korean",
  }))
    assert.match(buildWeatherPrompt(trip, lang).prompt, new RegExp(name));
  const long = {
    ...trip,
    days: Array.from({ length: 1000 }, (_, i) => ({
      dayCount: i + 1,
      activities: [{ ...activity, locationName: "Place " + i }],
    })),
  };
  assert.throws(() => buildWeatherPrompt(long), { status: 413 });
  const dates = {
    ...trip,
    days: Array.from({ length: 30 }, (_, i) => ({
      dayCount: i + 1,
      activities: [activity],
    })),
  };
  assert.equal(buildWeatherPrompt(dates).maxOutputTokens, 8192);
});
