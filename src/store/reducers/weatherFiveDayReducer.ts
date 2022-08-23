import { WeatherFiveDayAction, WeatherFiveDayActionType, WeatherFiveDayState } from '../types/weatherFiveDay';

const initialState: WeatherFiveDayState = {
  weatherFiveDay: [],
};

export const weatherFiveDayReducer = (state = initialState, action: WeatherFiveDayAction): WeatherFiveDayState => {
  switch (action.type) {
    case WeatherFiveDayActionType.GET_WEATHER_FIVE_DAY:
      return { weatherFiveDay: action.payload };
    default:
      return state;
  }
};
