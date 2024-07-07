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
  if (!weatherData || !weatherData.hourly || weatherData.hourly.length === 0) {
    return (
      <div className={styles.error}>
        <p>Failed to load weather data.</p>
      </div>
    ); 
  }

  const firstHourData = weatherData.hourly.time[0];
  const dataIndex = weatherData.hourly.time.indexOf(firstHourData);

  return (
    <div className={styles.wrapper}>
      {/* Température */}
      <MetricsCard
        title={"Temperature"}
        iconSrc={"/icons/temperature.png"}
        metric={weatherData.hourly.temperature_2m[dataIndex]}
        unit={"°C"}
      />
      {/* Humidité relative */}
      <MetricsCard
        title={"Humidity"}
        iconSrc={"/icons/humidity.png"}
        metric={weatherData.hourly.relative_humidity_2m[dataIndex]}
        unit={"%"}
      />
      {/* Vitesse du vent */}
      <MetricsCard
        title={"Wind speed"}
        iconSrc={"/icons/wind.png"}
        metric={getWindSpeed(unitSystem, weatherData.hourly.wind_speed_10m[dataIndex])}
        unit={unitSystem === "metric" ? "km/h" : "mph"}
      />
      {/* Direction du vent */}
        <MetricsCard
          title={"Wind direction"}
          iconSrc={"/icons/compass.png"}
          metric={degToCompass(weatherData.hourly.wind_direction_10m[dataIndex])}
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
