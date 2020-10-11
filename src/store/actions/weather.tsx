import {
  GET_WEATHER_BY_CITY_LOADED,
  GET_WEATHER_BY_CITY_REQUESTED,
  GET_DAILY_FORECAST_BY_CITY_REQUESTED,
  GET_DAILY_FORECAST_BY_CITY_LOADED,
  CLEAR_WEATHER_AND_FORECAST_DATA
} from './types/weather';

import { Dispatch } from 'redux';

import WeatherService from '../../weather/services/weatherService';

const clearWeatherAndForecastData = () => {
  return {
    type: CLEAR_WEATHER_AND_FORECAST_DATA
  }
};

const getWeatherByCityRequested = (cityName: string) =>  {
  return {
    type: GET_WEATHER_BY_CITY_REQUESTED,
    payload: cityName
  }
};

const getWeatherByCityLoaded = (data: any) => {
  return {
    type: GET_WEATHER_BY_CITY_LOADED,
    payload: data
  }
};

const getDailyForecastByCityRequested = () =>  {
  return {
    type: GET_DAILY_FORECAST_BY_CITY_REQUESTED
  }
};

const getDailyForecastByCityLoaded = (data: any) => {
  return {
    type: GET_DAILY_FORECAST_BY_CITY_LOADED,
    payload: data
  }
};

const getWeatherByCity = (weatherService: WeatherService, city: string) => () => (dispatch: Dispatch) => {
  dispatch(getWeatherByCityRequested(city));
  dispatch(getDailyForecastByCityRequested());

  weatherService.getWeatherByCityName(city).then(weather => {
    dispatch(getWeatherByCityLoaded(weather));
  });

  weatherService.getDailyForecastByCityName(city).then(forecast => {
    dispatch(getDailyForecastByCityLoaded(forecast));
  });
};

export {
  getWeatherByCity,
  clearWeatherAndForecastData
}
