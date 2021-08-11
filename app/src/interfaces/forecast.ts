import {
  Coordinates,
  CloudsInfo,
  MainWeatherInfo,
  Weather,
  WindInfo,
} from 'interfaces/weather';

export interface ForecastWeather {
  clouds: CloudsInfo,
  main: MainWeatherInfo,
  visibility: number,
  weather: Weather[],
  wind: WindInfo,
  dt_txt: string,
}

export interface Forecast {
  city: {
    coord: Coordinates
  },
  list: ForecastWeather[],
}
