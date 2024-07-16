import { getWeekDay, getTime, getAMPM } from "../services/helpers";
import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData, unitSystem }) => {
  
  const formattedTime = `${getTime(unitSystem, weatherData.current.time, weatherData.utc_offset_seconds)}`;

  return (
    <div className={styles.wrapper}>
      <h2>
        {`${getWeekDay(weatherData.daily.time[0], weatherData.utc_offset_seconds)}, ${formattedTime}`}
      </h2>
    </div>
  );
};
