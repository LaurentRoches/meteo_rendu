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

    export const getTime = (unitSystem, currentTime, utcOffsetSeconds) => {
      const localTime = unixToLocalTime(currentTime, utcOffsetSeconds);
      return unitSystem === "metric" ? localTime : timeTo12HourFormat(localTime);
    };

    export const getAMPM = (unitSystem, currentTime, utcOffsetSeconds) => {
      const localTime = unixToLocalTime(currentTime, utcOffsetSeconds);
      const hour = parseInt(localTime.split(":")[0], 10);
      return unitSystem === "imperial" ? (hour >= 12 ? "PM" : "AM") : "";
    };

    export const getWeekDay = (dateString, utcOffsetSeconds) => {
      const date = new Date(dateString);
      const utcDate = new Date(date.getTime() + utcOffsetSeconds * 1000);
      const weekday = [
        "Lundi", 
        "Mardi", 
        "Mercredi", 
        "Jeudi", 
        "Vendredi", 
        "Samedi", 
        "Dimanche"
      ];
      return weekday[utcDate.getUTCDay()];
    };
