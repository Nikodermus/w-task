import { days } from "@/constants/day.constant";

export interface HourSchedule {
  type: "open" | "close";
  value: number;
}

export type Day = typeof days[number];

export type Schedule = Record<Day, Array<HourSchedule>>;
