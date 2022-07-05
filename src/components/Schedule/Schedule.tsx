import styled from "styled-components";

import { Schedule as ScheduleType } from "@/types/Schedule";

import IconClock from "../Icons/IconClock";

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
  return (
    <>
      <Heading>
        <IconClockStyled></IconClockStyled>
        Opening Hours
      </Heading>

      {Object.entries(data).map(([day, hours]) => (
        <div key={day}>{day}</div>
      ))}
    </>
  );
};

export default Schedule;
