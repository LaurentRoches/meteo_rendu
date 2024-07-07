import {
  unixToLocalTime,
  kmToMiles,
  mpsToMph,
  timeTo12HourFormat,
} from "./converters";

export const getWindSpeed = (unitSystem, windInMps) =>
  unitSystem == "metric" ? windInMps : mpsToMph(windInMps);

export const getVisibility = (unitSystem, visibilityInMeters) =>
  unitSystem == "metric"
    ? (visibilityInMeters / 1000).toFixed(1)
    : kmToMiles(visibilityInMeters / 1000);

    export const getTime = (unitSystem, currentTime, timezone) => {
      const localTime = unixToLocalTime(currentTime, timezone);
      return unitSystem === "metric" ? localTime : timeTo12HourFormat(localTime);
    };

    export const getAMPM = (unitSystem, currentTime, timezone) => {
      const localTime = unixToLocalTime(currentTime, timezone);
      const hour = parseInt(localTime.split(":")[0], 10);
      return unitSystem === "imperial" ? (hour >= 12 ? "PM" : "AM") : "";
    };

    export const getWeekDay = (dateString, timezone) => {
      const date = new Date(dateString);
      const utcDate = new Date(date.getTime() + timezone * 1000);
      const weekday = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
      ];
      return weekday[utcDate.getUTCDay()];
    };
