import React from "react";
import styled from "styled-components";

import { Day, Schedule } from "@/types/Schedule";
import { getScheduleForDay } from "@/utils/schedule.util";

import Hour from "./Hour";

export interface HourProps {
  day: Day;
  schedule: Schedule;
  today: Day;
}

const StyledLi = styled.li`
  align-items: center;
  border-bottom: 1px solid var(--color-gray);
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: var(--sizing-sm) 0;
`;

const StyledDiv = styled.div`
  align-items: baseline;
  display: inline-flex;
  gap: var(--sizing-sm);
`;
const StyledHeading = styled.h2`
  font: var(--typography-body1);
  text-transform: capitalize;
`;
const StyledSubtitle = styled.h3`
  color: var(--color-green);
  font: var(--typography-caption);
  text-transform: uppercase;
`;

const StyledBody = styled.p<{
  secondary?: boolean;
}>`
  color: var(--color-${({ secondary }) => (secondary ? "gray-dark" : "black")});
  font: var(--typography-body2);
`;

const Hours: React.FC<HourProps> = ({ day, schedule, today }) => {
  const dayHours = schedule[day];
  const daySchedule = getScheduleForDay({ day, schedule });

  return (
    <StyledLi>
      <StyledDiv>
        <StyledHeading>{day}</StyledHeading>
        {today === day && <StyledSubtitle>Today</StyledSubtitle>}
      </StyledDiv>

      <div>
        {dayHours.length ? (
          <StyledBody>
            {daySchedule.map((hour, index) => (
              <React.Fragment key={hour.from}>
                <Hour hour={hour.from} day={day} />
                {" – "}
                <Hour hour={hour.to} day={day} />
                {index !== daySchedule.length - 1 && <span>{", "}</span>}
              </React.Fragment>
            ))}
          </StyledBody>
        ) : (
          <StyledBody secondary as="small">
            Closed
          </StyledBody>
        )}
      </div>
    </StyledLi>
  );
};

export default Hours;
