import { Dispatch } from "redux";
import {
  WeatherTodayAction,
  WeatherTodayActionType,
} from "../types/weatherToday";
import http from "../../http";

export const getWeatherToday = (cityName: string) => {
  return async (dispatch: Dispatch<WeatherTodayAction>) => {
    const API_KEY = "a1b75f29cf30e2d52888c247e71a0d46";
    const response = await http.get(
      `weather?q=${cityName}&appid=${API_KEY}&lang=ru&units=metric`
    );
    dispatch({
      type: WeatherTodayActionType.GET_WEATHER_TODAY,
      payload: response.data,
    });
  };
};
