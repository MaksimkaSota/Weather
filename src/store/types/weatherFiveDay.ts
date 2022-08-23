import { IWeatherFiveDay } from './IWeather';

export interface WeatherFiveDayState {
  weatherFiveDay: IWeatherFiveDay[];
}

export enum WeatherFiveDayActionType {
  GET_WEATHER_FIVE_DAY = 'GET_WEATHER_FIVE_DAY',
}

interface GetWeatherFiveDayAction {
  type: WeatherFiveDayActionType.GET_WEATHER_FIVE_DAY;
  payload: IWeatherFiveDay[];
}

export type WeatherFiveDayAction = GetWeatherFiveDayAction;
