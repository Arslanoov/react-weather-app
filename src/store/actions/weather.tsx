import {
  GET_WEATHER,
  WeatherActionTypes
} from './types/weather'

export function getWeather(): WeatherActionTypes {
  return {
    type: GET_WEATHER
  }
}
