import { getDaysOfWeek } from "../../utils/helpers";

export interface IWeatherToday {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
      iconCorrectFormat: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    tempCorrectFormat: number;
    feels_like: number;
    feels_likeCorrectFormat: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    speedCorrectFormat: number;
    gust: number;
    gustCorrectFormat: number;
    deg: number;
    degCorrectFormat: string;
  };
  clouds: {
    all: number;
  };
  dt: any;
  dtCorrectFormat: string;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunriseCorrectFormat: string;
    sunset: number;
    sunsetCorrectFormat: string;
    durationTimeCorrectFormat: string;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IWeatherFiveDay {
  cod: string;
  message: number;
  cnt: number;
  list: IList[];
  listOfFiveDays: IList[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface IList {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
  daysOfWeek?: string;
}

// export interface IHourlyWeather {
//   dt: number;
//   main: {
//     temp: number;
//     feels_like: number;
//     temp_min: number;
//     temp_max: number;
//     pressure: number;
//     sea_level: number;
//     grnd_level: number;
//     humidity: number;
//     temp_kf: number;
//   };
//   weather: [
//     {
//       id: number;
//       main: string;
//       description: string;
//       icon: string;
//     }
//   ];
//   clouds: {
//     all: number;
//   };
//   wind: {
//     speed: number;
//     deg: number;
//     gust: number;
//   };
//   visibility: number;
//   pop: number;
//   sys: {
//     pod: string;
//   };
//   dt_txt: string;
// }
