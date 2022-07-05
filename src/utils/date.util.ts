import { days } from "@/constants/day.constant";
import { Day } from "@/types/Schedule";

export const getCurrentDayName = () => {
  const date = new Date();
  const day = date.getDay();

  return days[day];
};

export const getFollowingDayName = (day: Day) => {
  const index = days.indexOf(day);
  return days[(index + 1) % 7];
};

export const getWeek = (firstDay: "sunday" | "monday") => {
  if (firstDay === "sunday") return days;

  return days.slice(1).concat(days[0]);
};
