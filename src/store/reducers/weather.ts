import {
  GET_WEATHER_BY_CITY_REQUESTED,
  GET_WEATHER_BY_CITY_LOADED,
  GET_DAILY_FORECAST_BY_CITY_REQUESTED,
  GET_DAILY_FORECAST_BY_CITY_LOADED,
  CLEAR_WEATHER_AND_FORECAST_DATA,
  WeatherActionTypes
} from "../actions/types/weather";

const initialState: any = {
  city: {
    loadingWeather: false,
    loadingForecast: false,
    name: '',
    weather: null,
    forecast: null
  }
};

export function weatherReducer(
  state: any = initialState,
  action: WeatherActionTypes
): any {
  switch (action.type) {
    case GET_WEATHER_BY_CITY_REQUESTED:
      return {
        ...state,
        city: {
          ...state.city,
          name: action.payload,
          loadingWeather: true
        }
      };

    case GET_WEATHER_BY_CITY_LOADED:
      return {
        ...state,
        city: {
          ...state.city,
          weather: action.payload,
          loadingWeather: false
        }
      };

    case GET_DAILY_FORECAST_BY_CITY_REQUESTED:
      return {
        ...state,
        city: {
          ...state.city,
          loadingForecast: true
        }
      };

    case GET_DAILY_FORECAST_BY_CITY_LOADED:
      return {
        ...state,
        city: {
          ...state.city,
          loadingForecast: false,
          forecast: action.payload
        }
      };

    case CLEAR_WEATHER_AND_FORECAST_DATA:
      return {
        ...state,
        city: {
          ...state.city,
          weather: null,
          forecast: null
        }
      };

    default:
      return state;
  }
}

export default weatherReducer;
