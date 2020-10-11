import { combineReducers } from 'redux';

import weatherReducer from "./weather";
import noteReducer from './note';

const appReducer = combineReducers({
  weather: weatherReducer,
  note: noteReducer
});

export default appReducer;
