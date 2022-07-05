import { secondsToISO, secondsToObject, secondsToTime } from "./time.util";

// Mon Jun 13 2022 12:00:00 GMT+0 (UTC)
const BASE_DATE = 1655121600464;

describe("secondsToObject", () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(BASE_DATE);
  });

  it("converts seconds after midnight to an object", () => {
    expect(secondsToObject(3600)).toEqual({ hours: 1, minutes: 0 });
    expect(secondsToObject(22_380)).toEqual({ hours: 6, minutes: 13 });
  });
});

describe("secondsToTime", () => {
  it("formats seconds after midnight to a simple hour", () => {
    expect(secondsToTime(3600)).toBe("1 AM");
    expect(secondsToTime(7260)).toBe("2 AM");
  });

  it("uses a 12-hour clock format", () => {
    expect(secondsToTime(43_200)).toBe("12 PM");
    expect(secondsToTime(72_000)).toBe("8 PM");
  });
});

("2022-07-05T08:00:00.564Z");

describe("secondsToISO", () => {
  it("gets date ISO from seconds", () => {
    expect(secondsToISO({ seconds: 3600, day: "wednesday" })).toBe(
      "2022-06-15T01:00:00.464Z"
    );
  });

  it('changes the day to the week start if it is not "sunday"', () => {
    expect(
      secondsToISO({ seconds: 3600, day: "sunday", weekStart: "sunday" })
    ).toBe("2022-06-12T01:00:00.464Z");

    expect(
      secondsToISO({ seconds: 3600, day: "sunday", weekStart: "monday" })
    ).toBe("2022-06-19T01:00:00.464Z");
  });
});
