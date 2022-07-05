import { days } from "@/constants/day.constant";

export interface HourSchedule {
  type: "open" | "close";
  value: number;
}

export type Day = typeof days[number];
export type Hour = { from: number; to: number };
export type Schedule = Record<Day, Array<HourSchedule>>;
export type WeekStart = "monday" | "sunday";
