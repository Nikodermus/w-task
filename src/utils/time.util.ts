import dayjs from "dayjs";

import { Day, WeekStart } from "@/types/Schedule";

import { getWeek } from "./date.util";

export const secondsToObject = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return { hours, minutes };
};

export const secondsToTime = (seconds: number) => {
  const { hours, minutes } = secondsToObject(seconds);

  const date = dayjs(new Date(0, 0, 0, hours, minutes));

  return date.format("h A");
};

interface SecondsToISO {
  seconds: number;
  day: Day;
  weekStart?: WeekStart;
}
export const secondsToISO = ({
  seconds,
  day,
  weekStart = "sunday",
}: SecondsToISO) => {
  const { hours, minutes } = secondsToObject(seconds);
  const week = getWeek(weekStart);
  const daysAfterWeekStart = week.findIndex(d => d === day);

  const firstWeekDay = dayjs(new Date()).day(weekStart === "sunday" ? 0 : 1);

  const iso = firstWeekDay
    .add(daysAfterWeekStart, "day")
    .hour(hours)
    .minute(minutes)
    .second(0);

  return iso.toISOString();
};
