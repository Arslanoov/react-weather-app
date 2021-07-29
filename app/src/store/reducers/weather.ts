import { WeatherActionType } from '../action-types'
import { WeatherAction } from '../actions'

interface WeatherState {
  city: {
    loadingWeather: boolean,
    loadingForecast: boolean,
    name: string,
    weather: any,
    forecast: any,
  }
}

const initialState: WeatherState = {
  city: {
    loadingWeather: false,
    loadingForecast: false,
    name: 'Moscow',
    weather: null,
    forecast: null,
  },
}

export function weatherReducer(
  state: WeatherState = initialState,
  action: WeatherAction,
): WeatherState {
  switch (action.type) {
    case WeatherActionType.GET_WEATHER_BY_CITY_REQUESTED:
      return {
        ...state,
        city: {
          ...state.city,
          name: action.payload,
          loadingWeather: true,
        },
      }

    case WeatherActionType.GET_WEATHER_BY_CITY_LOADED:
      return {
        ...state,
        city: {
          ...state.city,
          weather: action.payload,
          loadingWeather: false,
        },
      }

    case WeatherActionType.GET_DAILY_FORECAST_BY_CITY_REQUESTED:
      return {
        ...state,
        city: {
          ...state.city,
          loadingForecast: true,
        },
      }

    case WeatherActionType.GET_DAILY_FORECAST_BY_CITY_LOADED:
      return {
        ...state,
        city: {
          ...state.city,
          loadingForecast: false,
          forecast: action.payload,
        },
      }

    case WeatherActionType.CLEAR_WEATHER_AND_FORECAST_DATA:
      return {
        ...state,
        city: {
          ...state.city,
          weather: null,
          forecast: null,
        },
      }

    default:
      return state
  }
}

export default weatherReducer
