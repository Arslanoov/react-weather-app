import {
  GET_WEATHER,
  WeatherActionTypes
} from "../actions/types/weather";
import { WeatherState } from "./types/weather";

const initialState: WeatherState = {
  data: []
};

export function weatherReducer(
  state: WeatherState = initialState,
  action: WeatherActionTypes
): WeatherState {
  switch (action.type) {
    case GET_WEATHER:
      return {
        data: []
      };

    default:
      return state;
  }
}

export default weatherReducer;
