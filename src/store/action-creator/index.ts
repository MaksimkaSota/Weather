import * as WeatherTodayActionCreators from './weatherToday';
import * as WeatherFiveDayActionCreators from './weatherFiveDay';

export default {
  ...WeatherTodayActionCreators,
  ...WeatherFiveDayActionCreators,
};
