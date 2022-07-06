import { UseQueryResult } from "react-query";

type Query = UseQueryResult<unknown, Error>;

export const aQueryResponse = (newQuery: Partial<Query> = {}) =>
  ({
    data: null,
    error: null,
    isError: false,
    ...newQuery,
  } as Query);
