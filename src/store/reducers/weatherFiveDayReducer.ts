import {
  WeatherFiveDayAction,
  WeatherFiveDayActionType,
  WeatherFiveDayState,
} from "../types/weatherFiveDay";
import { IWeatherFiveDay } from "../types/IWeather";
import { getDaysOfWeek, getListOfFiveDays } from "../../utils/helpers";

const initialState: WeatherFiveDayState = {
  weatherFiveDay: {} as IWeatherFiveDay,
};

export const weatherFiveDayReducer = (
  state = initialState,
  action: WeatherFiveDayAction
): WeatherFiveDayState => {
  switch (action.type) {
    case WeatherFiveDayActionType.GET_WEATHER_FIVE_DAY:
      const data = action.payload;
      data.listOfFiveDays = getListOfFiveDays(action.payload.list);
      data.listOfFiveDays.map(
        (elem, index) => (elem.daysOfWeek = getDaysOfWeek(elem.dt_txt, index))
      );
      return { weatherFiveDay: action.payload };
    default:
      return state;
  }
};
