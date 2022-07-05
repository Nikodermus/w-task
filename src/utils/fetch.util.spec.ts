import { Schedule } from "@/types/Schedule";

import pseudoFetch from "./fetch.util";

describe("pseudoFetch", () => {
  it("returns async data by default", async () => {
    await expect(pseudoFetch()).resolves.toBeDefined();
  });

  it("fails when asked to", async () => {
    await expect(pseudoFetch({ fail: true })).rejects.toBeDefined();
  });

  it('returns the given response when "response" is given', async () => {
    const response = {
      data: {
        schedule: [],
      },
    } as unknown as Schedule;

    await expect(pseudoFetch({ response })).resolves.toEqual(response);
  });

  it('resolves after the given time when "time" is given', () => {
    jest.useFakeTimers();

    const time = 1000;
    const promise = pseudoFetch({ time });

    expect(promise).resolves.toBeUndefined();

    jest.advanceTimersByTime(time);

    expect(promise).resolves.toBeDefined();
  });
});
