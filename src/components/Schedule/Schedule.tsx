import styled from "styled-components";

import { Day, Schedule as ScheduleType } from "@/types/Schedule";
import { getCurrentDayName, getWeek } from "@/utils/date.util";

import IconClock from "../Icons/IconClock";
import Hours from "./Hours";

export interface ScheduleProps {
  data: ScheduleType;
}

const Heading = styled.h1`
  border-bottom: 2px solid var(--color-black);
  font: var(--typography-title);
  padding-bottom: var(--sizing-lg);
`;

const IconClockStyled = styled(IconClock)`
  color: var(--color-gray-dark);
  margin-right: var(--sizing-sm);
  vertical-align: baseline;
  width: var(--font-size-xl);
`;

const Schedule: React.FC<ScheduleProps> = ({ data }) => {
  const today = getCurrentDayName();

  return (
    <>
      <Heading>
        <IconClockStyled></IconClockStyled>
        Opening Hours
      </Heading>

      <ul>
        {getWeek("monday").map(day => (
          <Hours
            key={day}
            day={day as Day}
            schedule={data}
            today={today}
          ></Hours>
        ))}
      </ul>
    </>
  );
};

export default Schedule;
