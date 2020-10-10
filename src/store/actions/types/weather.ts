export const GET_WEATHER_BY_CITY_REQUESTED = 'GET_WEATHER_BY_CITY_REQUESTED';
export const GET_WEATHER_BY_CITY_LOADED = 'GET_WEATHER_BY_CITY_LOADED';

interface GetWeatherByCityLoadedPayload {
  loading: boolean,
  name: string,
  data: {
    main: string,
    description: string,
    icon: string,
    temp: string,
    windSpeed: string,
    clouds: string
  }
}

interface GetWeatherByCityRequestedAction {
  type: typeof GET_WEATHER_BY_CITY_REQUESTED,
  payload: string
}

interface GetWeatherByCityLoadedAction {
  type: typeof GET_WEATHER_BY_CITY_LOADED,
  payload: GetWeatherByCityLoadedPayload
}

export type WeatherActionTypes = GetWeatherByCityRequestedAction | GetWeatherByCityLoadedAction;
