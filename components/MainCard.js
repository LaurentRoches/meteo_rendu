import Image from "next/image";
import { ctoF, getDescriptionFromCode, getIconName} from "../services/converters";
import styles from "./MainCard.module.css";

export const MainCard = ({
  city,
  country,
  weatherCode,
  isDay,
  unitSystem,
  weatherData,
}) => {
  const temperature = weatherData?.current?.temperature_2m;
  const feelsLike = weatherData?.current?.apparent_temperature;
  const description = getDescriptionFromCode(weatherCode);
  const iconName = getIconName(weatherCode, isDay);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}, {country}
      </h1>
      <p className={styles.description}>{description}</p>
      <Image
        width="300px"
        height="300px"
        src={`/icons/${iconName}`}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
        {unitSystem === "metric"
          ? Math.round(temperature)
          : Math.round(ctoF(temperature))}
        °{unitSystem === "metric" ? "C" : "F"}
      </h1>
      <p>
        Ressenti : {" "}
        {unitSystem === "metric"
          ? Math.round(feelsLike)
          : Math.round(ctoF(feelsLike))}
        °{unitSystem === "metric" ? "C" : "F"}
      </p>
    </div>
  );
};
