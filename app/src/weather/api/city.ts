import api from 'api';

import ApiError from 'errors/api';

import { CurrentWeather } from 'interfaces/weather';
import { Forecast } from 'interfaces/forecast';

export const fetchCurrentWeather = async (params: {
  [key: string]: string,
}): Promise<CurrentWeather> => {
  try {
    const { data } = await api.get<CurrentWeather>('/weather', {
      params: {
        q: params.city,
        lat: params.lat,
        lon: params.lon,
        zip: params.code,
      },
    });
    return data;
  } catch (e) {
    throw new ApiError(e.response.data?.message);
  }
};

export const fetchDailyForecastByCity = async (city: string): Promise<Forecast> => {
  try {
    const { data } = await api.get<Forecast>('/forecast', {
      params: {
        q: city,
      },
    });
    return data;
  } catch (e) {
    throw new ApiError(e.response.data?.message);
  }
};

export const fetchCurrentWeatherByCity = async (city: string): Promise<CurrentWeather> => fetchCurrentWeather({
  city,
});

export const fetchCurrentWeatherByCoordinates = async (
  lat: string,
  lon: string,
): Promise<CurrentWeather> => fetchCurrentWeather({
  lat,
  lon,
});

export const fetchCurrentWeatherByZipCode = async (
  code: string,
): Promise<CurrentWeather> => fetchCurrentWeather({
  code,
});
