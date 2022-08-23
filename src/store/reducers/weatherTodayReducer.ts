import { WeatherTodayAction, WeatherTodayActionType, WeatherTodayState } from '../types/weatherToday';

const initialState: WeatherTodayState = {
  weatherToday: [],
};

export const weatherTodayReducer = (state = initialState, action: WeatherTodayAction): WeatherTodayState => {
  switch (action.type) {
    case WeatherTodayActionType.GET_WEATHER_TODAY:
      return { weatherToday: action.payload };
    default:
      return state;
  }
};
