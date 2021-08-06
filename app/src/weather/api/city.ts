import api from 'api';

import ApiError from 'errors/api';

import { CurrentWeather } from 'interfaces/weather';

export const fetchCurrentWeatherByCity = async (city: string): Promise<CurrentWeather> => {
  try {
    const { data } = await api.get<CurrentWeather>('/weather', {
      params: {
        q: city,
      },
    });
    return data;
  } catch (e) {
    throw new ApiError(e.getMessage());
  }
};
