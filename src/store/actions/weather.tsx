import {
  GET_WEATHER_BY_CITY_LOADED,
  GET_WEATHER_BY_CITY_REQUESTED
} from './types/weather';

import { Dispatch } from 'redux';

import WeatherService from '../../weather/services/weatherService';

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

const getWeatherByCity = (weatherService: WeatherService, city: string) => () => (dispatch: Dispatch) => {
  dispatch(getWeatherByCityRequested(city));
  weatherService.getWeatherByCityName(city).then(response => {
    dispatch(getWeatherByCityLoaded(response));
  });
};

export {
  getWeatherByCity
}
