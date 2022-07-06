import { useQuery } from "react-query";
import styled from "styled-components";

import type { Schedule as ScheduleType } from "@/types/Schedule";
import pseudoFetch from "@/utils/fetch.util";
import { toREM } from "@/utils/styled.util";

import AsyncWrapper from "../Lib/AsyncWrapper";
import ErrorMessage from "../Lib/ErrorMessage";
import Loader from "../Lib/Loader";
import Schedule from "./Schedule";

const Wrapper = styled.main`
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  width: minmax(${toREM(300)}, ${toREM(500)});
  padding-bottom: var(--sizing-3xl);
  padding: var(--sizing-2xl);
  box-shadow: 2px 2px 12px -4px var(--color-gray-dark);
    var(--sizing-sm) var(--color-gray-dark);
`;

const ScheduleWrapper: React.FC = () => {
  const query = useQuery<ScheduleType, Error>(
    "todos",
    () =>
      pseudoFetch({
        // Fail 1 out of 10 times
        fail: Math.random() > 0.9,
      }),
    {
      retry: false,
    }
  );

  return (
    <Wrapper>
      <AsyncWrapper query={query}>
        <AsyncWrapper.Loading>
          <Loader></Loader>
        </AsyncWrapper.Loading>

        <AsyncWrapper.Data>
          <Schedule data={query.data as ScheduleType}></Schedule>
        </AsyncWrapper.Data>

        <AsyncWrapper.Error>
          <ErrorMessage message={query.error?.message}></ErrorMessage>
        </AsyncWrapper.Error>
      </AsyncWrapper>
    </Wrapper>
  );
};

export default ScheduleWrapper;
