import { getWeekDay, getTime, getAMPM } from "../services/helpers";
import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData, unitSystem }) => {
  const formattedTime = `${getTime(unitSystem, weatherData.hourly.time[0], weatherData.timezone)} ${getAMPM(unitSystem, weatherData.hourly.time[0], weatherData.timezone)}`;

  return (
    <div className={styles.wrapper}>
      <h2>
        {`${getWeekDay(weatherData.daily.time[0], weatherData.timezone)}, ${formattedTime}`}
      </h2>
    </div>
  );
};
