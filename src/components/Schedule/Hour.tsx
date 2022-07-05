import { Day } from "@/types/Schedule";
import { secondsToISO, secondsToTime } from "@/utils/time.util";

export interface HourProps {
  day: Day;
  hour: number;
}

const Hour: React.FC<HourProps> = ({ hour, day }) => {
  return (
    <time dateTime={secondsToISO({ seconds: hour, day, weekStart: "monday" })}>
      {secondsToTime(hour)}
    </time>
  );
};

export default Hour;
