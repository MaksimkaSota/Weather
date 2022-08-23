import { Dispatch } from 'redux';
import { WeatherFiveDayAction, WeatherFiveDayActionType } from '../types/weatherFiveDay';
import http from '../../http';

export const getWeatherFiveDay = (cityName: string) => {
  return async (dispatch: Dispatch<WeatherFiveDayAction>) => {
    const API_KEY = 'a1b75f29cf30e2d52888c247e71a0d46';
    const response = await http.get(`forecast?q=${cityName}&appid=${API_KEY}&lang=ru&units=metric`);
    dispatch({ type: WeatherFiveDayActionType.GET_WEATHER_FIVE_DAY, payload: response.data });
  };
};
