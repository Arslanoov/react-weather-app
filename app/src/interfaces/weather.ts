type WeatherType = 'Clouds';

export interface Coordinates {
  lon: number,
  lat: number
}

export interface Weather {
  id: number,
  main: WeatherType,
  description: string,
  icon: string
}

export interface MainWeatherInfo {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number,
  sea_level: number,
  grnd_level: number
}

export interface WindInfo {
  speed: number,
  deg: number,
  gust: number
}

export interface CloudsInfo {
  all: number
}

export interface OtherInformation {
  type: number,
  id: number,
  country: string,
  sunrise: number,
  sunset: number
}

export interface CurrentWeather {
  coord: Coordinates,
  weather: Weather[],
  base: string,
  main: MainWeatherInfo,
  visibility: number,
  wind: WindInfo,
  clouds: CloudsInfo,
  dt: number,
  sys: OtherInformation,
  timezone: number,
  id: number,
  name: string,
  cod: number
}
