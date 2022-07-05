import { useQuery } from "react-query";
import styled from "styled-components";

import { toREM } from "@/style/styled.util";
import type { Schedule as ScheduleType } from "@/types/Schedule";
import pseudoFetch from "@/utils/fetch";

import AsyncWrapper from "../Lib/AsyncWrapper";
import Schedule from "./Schedule";

const Wrapper = styled.main`
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: var(--sizing-3xl) var(--sizing-2xl);
  width: ${toREM(400)};
  box-shadow: 2px 2px 12px -4px var(--color-gray-dark);
    var(--sizing-sm) var(--color-gray-dark);
`;

const ScheduleWrapper: React.FC = () => {
  const query = useQuery<ScheduleType, Error>("todos", () =>
    pseudoFetch({ time: 1 })
  );

  return (
    <Wrapper>
      <AsyncWrapper query={query}>
        <AsyncWrapper.Loading>loading...</AsyncWrapper.Loading>
        <AsyncWrapper.Data>
          <Schedule data={query.data as ScheduleType}></Schedule>
        </AsyncWrapper.Data>
      </AsyncWrapper>
    </Wrapper>
  );
};

export default ScheduleWrapper;
