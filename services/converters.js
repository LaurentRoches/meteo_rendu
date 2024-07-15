export const ctoF = (c) => (c * 9) / 5 + 32;

export const mpsToMph = (mps) => (mps * 2.236936).toFixed(2);

export const kmToMiles = (km) => (km / 1.609).toFixed(1);

export const timeTo12HourFormat = (time) => {
  let [hours, minutes] = time.split(":");
  hours = parseInt(hours, 10);
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${period}`;
};

export const degToCompass = (num) => {
  var val = Math.round(num / 22.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSO",
    "SO",
    "OSO",
    "O",
    "ONO",
    "NO",
    "NNO",
  ];
  return arr[val % 16];
};

export const unixToLocalTime = (unixSeconds, utcOffsetSeconds) => {
  if (!unixSeconds || utcOffsetSeconds === undefined) {
    return "Invalid time";
  }
  try {
    const utcSeconds = unixSeconds + utcOffsetSeconds;
    const localDate = new Date(utcSeconds * 1000);
    return localDate.toISOString().match(/(\d{2}:\d{2})/)[0];
  } catch (error) {
    return "Invalid time";
  }
};
