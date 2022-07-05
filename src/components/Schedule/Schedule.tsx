import { useQuery } from "react-query";

import type { Schedule as ScheduleType } from "@/types/Schedule";
import pseudoFetch from "@/utils/fetch";

import AsyncWrapper from "../Lib/AsyncWrapper";

const Schedule: React.FC = () => {
  const query = useQuery<ScheduleType, Error>("todos", () =>
    pseudoFetch({ time: 2000 })
  );

  return (
    <AsyncWrapper query={query}>
      <AsyncWrapper.Loading>loading...</AsyncWrapper.Loading>
      <AsyncWrapper.Data>
        {JSON.stringify(query.data, null, 4)}
      </AsyncWrapper.Data>
    </AsyncWrapper>
  );
};

export default Schedule;
