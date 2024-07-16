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

export const getDescriptionFromCode = (code) => {
  const descriptions = {
    0: "Ciel clair",
    1: "Principalement clair",
    2: "Partiellement nuageux",
    3: "Nuageux",
    45: "Brouillard",
    48: "Brouillard givrant",
    51: "Bruine légère",
    53: "Bruine modérée",
    55: "Bruine forte",
    61: "Pluie légère",
    63: "Pluie modérée",
    65: "Pluie forte",
    67: "Pluie et neige",
    71: "Chutes de neige légères",
    73: "Chutes de neige modérées",
    75: "Chutes de neige fortes",
    80: "Averses légères",
    81: "Averses modérées",
    82: "Averses fortes",
    95: "Orages légers ou modérés",
    99: "Orages violents"
  };

  return descriptions[code] || "Condition météorologique inconnue";
};

export const getIconName = (weatherCode, isDay) => {
  const dayOrNight = isDay ? "d" : "n";
  const weatherIcons = {
    0: `01${dayOrNight}.svg`,
    1: `01${dayOrNight}.svg`,
    2: `02${dayOrNight}.svg`,
    3: `03${dayOrNight}.svg`,
    45: `50${dayOrNight}.svg`,
    48: `50${dayOrNight}.svg`,
    51: `09${dayOrNight}.svg`,
    53: `09${dayOrNight}.svg`,
    55: `09${dayOrNight}.svg`,
    61: `10${dayOrNight}.svg`,
    63: `10${dayOrNight}.svg`,
    65: `10${dayOrNight}.svg`,
    67: `10${dayOrNight}.svg`,
    71: `13${dayOrNight}.svg`,
    73: `13${dayOrNight}.svg`,
    75: `13${dayOrNight}.svg`,
    80: `09${dayOrNight}.svg`,
    81: `09${dayOrNight}.svg`,
    82: `09${dayOrNight}.svg`,
    95: `11${dayOrNight}.svg`,
    99: `11${dayOrNight}.svg`,
  };
  const iconName = weatherIcons[weatherCode] || `01${dayOrNight}.svg`;
  return iconName;
};