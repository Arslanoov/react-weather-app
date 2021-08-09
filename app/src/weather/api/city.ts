import api from 'api';

import ApiError from 'errors/api';

import { CurrentWeather } from 'interfaces/weather';

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

export const fetchCurrentWeatherByCity = async (city: string): Promise<CurrentWeather> => fetchCurrentWeather({
  city,
});

export const fetchCurrentWeatherByCoordinates = async (
  lat: string,
  lot: string,
): Promise<CurrentWeather> => fetchCurrentWeather({
  lat,
  lot,
});

export const fetchCurrentWeatherByZipCode = async (
  code: string,
): Promise<CurrentWeather> => fetchCurrentWeather({
  code,
});
