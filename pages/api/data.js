import config from "../../config.json";

export default async function handler(req, res) {
  const { latitude, longitude } = config;

  try {
    const getWeatherData = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,,is_day,weather_code,wind_speed_10m,wind_direction_10m&daily=sunrise,sunset&timeformat=unixtime&timezone=Europe%2FBerlin&forecast_days=1&models=arome_france`
    );

    if (!getWeatherData.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await getWeatherData.json();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
