import Image from "next/image";
import { ctoF } from "../services/converters";
import styles from "./MainCard.module.css";

export const MainCard = ({
  city,
  country,
  description,
  iconName,
  unitSystem,
  weatherData,
}) => {
  const temperature = weatherData.temperature;
  const feelsLike = weatherData.temperature;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}, {country}
      </h1>
      <p className={styles.description}>{description}</p>
      <Image
        width="300px"
        height="300px"
        src={`/icons/${iconName}.svg`}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
        {unitSystem === "metric"
          ? Math.round(temperature)
          : Math.round(ctoF(temperature))}
        °{unitSystem === "metric" ? "C" : "F"}
      </h1>
      <p>
        Feels like{" "}
        {unitSystem === "metric"
          ? Math.round(feelsLike)
          : Math.round(ctoF(feelsLike))}
        °{unitSystem === "metric" ? "C" : "F"}
      </p>
    </div>
  );
};
