import { combineReducers } from 'redux';
import Weather from './reducer_weather';

const rootReducer = combineReducers({
  weather: Weather
});

export default rootReducer;
