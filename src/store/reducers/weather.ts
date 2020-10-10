import {
  GET_WEATHER_BY_CITY_LOADED,
  GET_WEATHER_BY_CITY_REQUESTED,
  WeatherActionTypes
} from "../actions/types/weather";

import {WeatherState} from "./types/weather";

const initialState: WeatherState = {
  city: {
    loading: false,
    name: '',
    data: null
  }
};

export function weatherReducer(
  state: WeatherState = initialState,
  action: WeatherActionTypes
): WeatherState {
  switch (action.type) {
    case GET_WEATHER_BY_CITY_REQUESTED:
      return {
        ...state,
        city: {
          ...state.city,
          name: action.payload,
          loading: true
        }
      };

    case GET_WEATHER_BY_CITY_LOADED:
      return {
        ...state,
        city: {
          ...state.city,
          data: action.payload,
          loading: false
        }
      };

    default:
      return state;
  }
}

export default weatherReducer;
