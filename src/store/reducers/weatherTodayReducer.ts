import {
  WeatherTodayAction,
  WeatherTodayActionType,
  WeatherTodayState,
} from "../types/weatherToday";
import { IWeatherToday } from "../types/IWeather";
import {
  getDate,
  getDurationTime,
  getImg,
  getTime,
  getWindDestination,
} from "../../utils/helpers";

const initialState: WeatherTodayState = {
  weatherToday: {} as IWeatherToday,
};

export const weatherTodayReducer = (
  state = initialState,
  action: WeatherTodayAction
): WeatherTodayState => {
  switch (action.type) {
    case WeatherTodayActionType.GET_WEATHER_TODAY:
      const data = action.payload;
      data.dtCorrectFormat = getDate(action.payload.dt);
      data.weather[0].iconCorrectFormat = getImg(
        action.payload.weather[0].icon
      );
      data.main.tempCorrectFormat = Math.round(action.payload.main.temp);
      data.main.feels_likeCorrectFormat = Math.round(
        action.payload.main.feels_like
      );
      data.wind.speedCorrectFormat = Math.round(action.payload.wind.speed);
      data.wind.gustCorrectFormat = Math.round(action.payload.wind.gust);
      data.wind.degCorrectFormat = getWindDestination(action.payload.wind.deg);
      data.sys.sunriseCorrectFormat = getTime(action.payload.sys.sunrise);
      data.sys.sunsetCorrectFormat = getTime(action.payload.sys.sunset);
      data.sys.durationTimeCorrectFormat = getDurationTime(
        action.payload.sys.sunset - action.payload.sys.sunrise
      );
      return {
        weatherToday: data,
      };
    default:
      return state;
  }
};
