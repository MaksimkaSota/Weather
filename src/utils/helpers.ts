import { IList } from "../store/types/IWeather";

export const getDate = (date: number) => {
  let currentDate = new Date(date * 1000);

  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  let number = currentDate.getDate();

  if (month < 10) {
    if (number < 10) {
      return `0${number}.0${month}.${year}`;
    }
    return `${number}.0${month}.${year}`;
  }
  if (number < 10) {
    return `0${number}.0${month}.${year}`;
  }
  return `${number}.${month}.${year}`;
};

export const getTime = (time: number) => {
  let currentTime = new Date(time * 1000);

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  if (hours < 10) {
    if (minutes < 10) {
      return `0${hours}:0${minutes}`;
    }
    return `0${hours}:${minutes}`;
  }
  if (minutes < 10) {
    return `${hours}:0${minutes}`;
  }
  return `${hours}:${minutes}`;
};

export const getDurationTime = (time: number) => {
  let hours = Math.floor(time / 3600);
  let ost = time - hours * 3600;
  let minutes = Math.floor(ost / 60);

  if (hours < 10) {
    if (minutes < 10) {
      return `0${hours}:0${minutes}`;
    }
    return `0${hours}:${minutes}`;
  }
  if (minutes < 10) {
    return `${hours}:0${minutes}`;
  }
  return `${hours}:${minutes}`;
};

export const getWindDestination = (deg: number) => {
  let destination = "";
  if ((0 <= deg && deg <= 15) || (345 <= deg && deg <= 360)) {
    destination = "север";
  }
  if (75 <= deg && deg <= 105) {
    return "восток";
  }
  if (165 <= deg && deg <= 195) {
    destination = "юг";
  }
  if (255 <= deg && deg <= 285) {
    destination = "запад";
  }
  if (15 < deg && deg < 75) {
    destination = "северо-восток";
  }
  if (105 < deg && deg < 165) {
    destination = "юго-восток";
  }
  if (195 < deg && deg < 255) {
    destination = "юго-запад";
  }
  if (285 < deg && deg < 345) {
    destination = "северо-запад";
  }
  return destination;
};

export const getImg = (imgId: string) => {
  return `http://openweathermap.org/img/wn/${imgId}@2x.png`;
};

export const getListOfFiveDays = (list: IList[]) => {
  let listOfTonight = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].dt_txt.includes("00:00:00")) {
      listOfTonight.push(list[i]);
      break;
    }
  }

  let listOfNextDays = [];
  for (let j = 0; j < list.length; j++) {
    if (list[j].dt_txt.includes("15:00:00")) {
      listOfNextDays.push(list[j]);
    }
  }

  let currentDate = new Date();
  if (currentDate.getHours() < 18) {
    listOfNextDays.shift();
  } else {
    listOfNextDays.pop();
  }

  return listOfTonight.concat(listOfNextDays);
};

export const getDaysOfWeek = (date: string, i: number) => {
  let days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  if (i === 0) {
    return "Сегодня ночью";
  }

  let elementDate = new Date(date);
  return days[elementDate.getDay()];
};
