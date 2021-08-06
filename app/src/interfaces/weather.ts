// TODO: Split types and interfaces

export type WeatherType = |
'Thunderstorm' |
'Drizzle' |
'Rain' |
'Snow' |
'Mist' |
'Smoke' |
'Haze' |
'Dust' |
'Fog' |
'Sand' |
'Ash' |
'Squall' |
'Tornado' |
'Clear' |
'Clouds';

export type WeatherIcon = |
'01d' |
'02d' |
'03d' |
'04d' |
'09d' |
'10d' |
'11d' |
'13d' |
'50d' |
'01n' |
'02n' |
'03n' |
'04n' |
'09n' |
'10n' |
'11n' |
'13n' |
'50n';

export interface Coordinates {
  lon: number,
  lat: number
}

export interface Weather {
  id: number,
  main: WeatherType,
  description: string,
  icon: WeatherIcon
}

export interface MainWeatherInfo {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number,
  sea_level?: number,
  grnd_level?: number
}

export interface WindInfo {
  speed: number,
  deg: number,
  gust?: number
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
