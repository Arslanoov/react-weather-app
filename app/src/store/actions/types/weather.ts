export const GET_WEATHER_BY_CITY_REQUESTED = 'GET_WEATHER_BY_CITY_REQUESTED';
export const GET_WEATHER_BY_CITY_LOADED = 'GET_WEATHER_BY_CITY_LOADED';
export const GET_DAILY_FORECAST_BY_CITY_REQUESTED = 'GET_DAILY_FORECAST_BY_CITY_REQUESTED';
export const GET_DAILY_FORECAST_BY_CITY_LOADED = 'GET_DAILY_FORECAST_BY_CITY_LOADED';
export const CLEAR_WEATHER_AND_FORECAST_DATA = 'CLEAR_WEATHER_AND_FORECAST_DATA';

interface GetWeatherByCityRequestedAction {
  type: typeof GET_WEATHER_BY_CITY_REQUESTED,
  payload: string
}

interface GetWeatherByCityLoadedAction {
  type: typeof GET_WEATHER_BY_CITY_LOADED,
  payload: any
}

interface GetDailyForecastByCityRequestedAction {
  type: typeof GET_DAILY_FORECAST_BY_CITY_REQUESTED
}

interface GetDailyForecastByCityLoadedAction {
  type: typeof GET_DAILY_FORECAST_BY_CITY_LOADED,
  payload: any
}

interface ClearWeatherAndForecastData {
  type: typeof CLEAR_WEATHER_AND_FORECAST_DATA,
  payload: any
}

export type WeatherActionTypes =
  GetWeatherByCityRequestedAction |
  GetWeatherByCityLoadedAction |
  GetDailyForecastByCityRequestedAction |
  GetDailyForecastByCityLoadedAction |
  ClearWeatherAndForecastData;
