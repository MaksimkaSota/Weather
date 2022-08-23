import { combineReducers } from 'redux';
import { weatherTodayReducer } from './weatherTodayReducer';
import { weatherFiveDayReducer } from './weatherFiveDayReducer';

export const rootReducer = combineReducers({
  weatherToday: weatherTodayReducer,
  weatherFiveDay: weatherFiveDayReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
