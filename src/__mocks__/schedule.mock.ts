import { HourSchedule, Schedule } from "@/types/Schedule";

export const aSchedule = (newSchedule: Partial<Schedule> = {}) => ({
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
  ...newSchedule,
});

export const anHour = () =>
  [
    // One hour
    { type: "open", value: 3600 },
    // 12 hours
    { type: "close", value: 43_200 },
  ] as Array<HourSchedule>;
