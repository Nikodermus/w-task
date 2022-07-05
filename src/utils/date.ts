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
