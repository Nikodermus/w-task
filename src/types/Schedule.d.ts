export interface HourSchedule {
  type: "open" | "close";
  value: number;
}

export type Day =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type Schedule = Record<Day, Array<HourSchedule>>;
