import styled from "styled-components";

import { Day } from "@/types/Schedule";
import { secondsToISO, secondsToTime } from "@/utils/time.util";

export interface HourProps {
  day: Day;
  hour: number;
}

const StyledTime = styled.time`
  white-space: nowrap;
`;

const Hour: React.FC<HourProps> = ({ hour, day }) => {
  return (
    <StyledTime
      dateTime={secondsToISO({ seconds: hour, day, weekStart: "monday" })}
    >
      {secondsToTime(hour)}
    </StyledTime>
  );
};

export default Hour;
