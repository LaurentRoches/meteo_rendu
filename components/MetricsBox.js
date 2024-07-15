import { degToCompass } from "../services/converters";
import {
  getTime,
  getAMPM,
  getVisibility,
  getWindSpeed,
} from "../services/helpers";
import { MetricsCard } from "./MetricsCard";
import styles from "./MetricsBox.module.css";

export const MetricsBox = ({ weatherData, unitSystem }) => {
  if (!weatherData || !weatherData.current || weatherData.current.length === 0) {
    return (
      <div className={styles.error}>
        <p>Failed to load weather data.</p>
      </div>
    ); 
  }

  const firstHourData = weatherData.current.time;

  return (
    <div className={styles.wrapper}>
      {/* Température */}
      <MetricsCard
        title={"Temperature"}
        iconSrc={"/icons/temperature.png"}
        metric={weatherData.current.temperature_2m}
        unit={"°C"}
      />
      {/* Humidité relative */}
      <MetricsCard
        title={"Humidity"}
        iconSrc={"/icons/humidity.png"}
        metric={weatherData.current.relative_humidity_2m}
        unit={"%"}
      />
      {/* Vitesse du vent */}
      <MetricsCard
        title={"Wind speed"}
        iconSrc={"/icons/wind.png"}
        metric={getWindSpeed(unitSystem, weatherData.current.wind_speed_10m)}
        unit={unitSystem === "metric" ? "km/h" : "mph"}
      />
      {/* Direction du vent */}
        <MetricsCard
          title={"Wind direction"}
          iconSrc={"/icons/compass.png"}
          metric={degToCompass(weatherData.current.wind_direction_10m)}
        />
      {/* Visibilité, si disponible */}
      {weatherData.visibility && (
        <MetricsCard
          title={"Visibility"}
          iconSrc={"/icons/binocular.png"}
          metric={getVisibility(unitSystem, weatherData.visibility)}
          unit={unitSystem === "metric" ? "km" : "miles"}
        />
      )}
      {/* Heure du lever du soleil */}
      <MetricsCard
        title={"Sunrise"}
        iconSrc={"/icons/sunrise.png"}
        metric={getTime(
          unitSystem,
          weatherData.daily.sunrise,
          weatherData.daily.time
        )}
        unit={getAMPM(
          unitSystem,
          weatherData.daily.sunrise,
          weatherData.daily.time
        )}
      />
      {/* Heure du coucher du soleil */}
      <MetricsCard
        title={"Sunset"}
        iconSrc={"/icons/sunset.png"}
        metric={getTime(
          unitSystem,
          weatherData.daily.sunset,
          weatherData.daily.time
        )}
        unit={getAMPM(
          unitSystem,
          weatherData.daily.sunset,
          weatherData.daily.time
        )}
      />
    </div>
  );
};
