// Time related tests need to be run with TZ=UTC

import { getCurrentDayName } from "./date.util";

// Mon Jun 13 2022 12:00:00 GMT+0 (UTC)
const BASE_DATE = 1655121600464;

describe("getCurrentDayName", () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(BASE_DATE);
  });

  it("gets the current day name", () => {
    expect(getCurrentDayName()).toBe("monday");
  });
});
