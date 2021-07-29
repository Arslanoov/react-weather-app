import { WeatherActionType } from '../action-types'

interface WeatherData {

}

interface ForecastData {

}

///

interface GetWeatherByCityRequested {
  type: WeatherActionType.GET_WEATHER_BY_CITY_REQUESTED,
  payload: string
}

interface GetWeatherByCityLoaded {
  type: WeatherActionType.GET_WEATHER_BY_CITY_LOADED,
  payload: WeatherData
}

interface GetDailyForecastByCityRequested {
  type: WeatherActionType.GET_DAILY_FORECAST_BY_CITY_REQUESTED
}

interface GetDailyForecastByCityLoaded {
  type: WeatherActionType.GET_DAILY_FORECAST_BY_CITY_LOADED,
  payload: ForecastData
}

interface ClearWeatherAndForecastData {
  type: WeatherActionType.CLEAR_WEATHER_AND_FORECAST_DATA
}

export type Action =
  GetWeatherByCityRequested |
  GetWeatherByCityLoaded |
  GetDailyForecastByCityRequested |
  GetDailyForecastByCityLoaded |
  ClearWeatherAndForecastData
