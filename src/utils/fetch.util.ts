import { Schedule } from "@/types/Schedule";

import mock from "../__mocks__/response.mock.json";

export interface FetchOptions {
  fail: boolean;
  response: Schedule;
  time: number;
}

const pseudoFetch = (
  fetchOptions: Partial<FetchOptions> = {}
): Promise<Schedule> => {
  const options = {
    fail: false,
    response: mock as unknown as Schedule,
    time: 500,
    ...fetchOptions,
  };

  const { time, fail, response } = options;

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (fail) {
        rej(new Error("Something went wrong"));
      } else {
        res(response);
      }
    }, time);
  });
};

export default pseudoFetch;
