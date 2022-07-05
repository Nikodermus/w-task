import { aSchedule } from "@/__mocks__/schedule.mock";

import { getScheduleForDay } from "./schedule.util";

const ONE_HOUR = 3600;

describe("getScheduleForDay", () => {
  it("returns an empty day when there's no info", () => {
    expect(
      getScheduleForDay({
        day: "sunday",
        schedule: aSchedule(),
      })
    ).toEqual([]);
  });

  it("returns a set of open and close for a given day", () => {
    const schedule = aSchedule({
      sunday: [
        { type: "open", value: 8 * ONE_HOUR },
        { type: "close", value: 18 * ONE_HOUR },
      ],
    });

    expect(getScheduleForDay({ day: "sunday", schedule })).toEqual([
      { from: 28_800, to: 64_800 },
    ]);
  });

  it("returs multiple open and close for a given day", () => {
    const schedule = aSchedule({
      sunday: [
        { type: "open", value: 8 * ONE_HOUR },
        { type: "close", value: 18 * ONE_HOUR },
        { type: "open", value: 20 * ONE_HOUR },
        { type: "close", value: 22 * ONE_HOUR },
      ],
    });

    expect(getScheduleForDay({ day: "sunday", schedule })).toEqual([
      { from: 28_800, to: 64_800 },
      { from: 72_000, to: 79_200 },
    ]);
  });

  it("ignores close hours that are before the first open hour", () => {
    const schedule = aSchedule({
      sunday: [
        { type: "close", value: 1 * ONE_HOUR },
        { type: "open", value: 20 * ONE_HOUR },
        { type: "close", value: 22 * ONE_HOUR },
      ],
    });

    expect(getScheduleForDay({ day: "sunday", schedule })).toEqual([
      { from: 72_000, to: 79_200 },
    ]);
  });

  it("combines open and close hours that are separated by a different day", () => {
    const schedule = aSchedule({
      sunday: [{ type: "open", value: 20 * ONE_HOUR }],
      monday: [{ type: "close", value: 2 * ONE_HOUR }],
    });

    expect(getScheduleForDay({ day: "sunday", schedule })).toEqual([
      { from: 72_000, to: 7_200 },
    ]);
  });

  it("shows a day with only closing time as empty", () => {
    const schedule = aSchedule({
      sunday: [{ type: "open", value: 20 * ONE_HOUR }],
      monday: [{ type: "close", value: 2 * ONE_HOUR }],
    });

    expect(getScheduleForDay({ day: "monday", schedule })).toEqual([]);
  });
});
