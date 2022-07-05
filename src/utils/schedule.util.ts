import { Day, Hour, HourSchedule, Schedule } from "@/types/Schedule";

import { getFollowingDayName } from "./date.util";

interface GetScheduleForDay {
  day: Day;
  schedule: Schedule;
}

export const getScheduleForDay = ({ day, schedule }: GetScheduleForDay) => {
  const daySchedule = schedule[day];
  const firstOpen = daySchedule.findIndex(({ type }) => type === "open");

  if (firstOpen === -1) {
    return [];
  }
  const parsedSchedule = schedule[day].slice(firstOpen);

  if (parsedSchedule[parsedSchedule.length - 1]?.type === "open") {
    parsedSchedule.push(
      schedule[getFollowingDayName(day)]
        .reverse()
        .find(({ type }) => type === "close") as HourSchedule
    );
  }

  return parsedSchedule.reduce((acc, hour) => {
    const copy = [...acc];

    if (hour.type === "open") {
      copy.push({
        from: hour.value,
        to: 0,
      });
    } else {
      copy[copy.length - 1].to = hour.value;
    }

    return copy;
  }, [] as Array<Hour>);
};
