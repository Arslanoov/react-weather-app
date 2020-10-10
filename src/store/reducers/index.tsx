import { combineReducers } from 'redux';

import weatherReducer from "./weather";

const appReducer = combineReducers({
  weather: weatherReducer
});

export default appReducer;
