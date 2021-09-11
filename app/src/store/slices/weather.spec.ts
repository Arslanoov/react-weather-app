import { store } from 'store';

import * as api from 'weather/api/city';

import { CurrentWeather } from 'interfaces/weather';
import { Forecast } from 'interfaces/forecast';

import { fetchCityWeather, fetchDailyForecast } from './weather';

describe('Weather slice', () => {
  test('fetch city weather', async () => {
    const fetchWeatherByCitySpy = jest
      .spyOn(api, 'fetchCurrentWeatherByCity')
      .mockReturnValue({
        base: 'los angeles',
      } as unknown as Promise<CurrentWeather>);

    await store.dispatch(fetchCityWeather('Los Angeles'));

    expect(fetchWeatherByCitySpy).toBeCalled();

    const state = store.getState();
    expect(state.weather.currentWeather).toStrictEqual({
      base: 'los angeles',
    });
  });

  test('fetch city forecast', async () => {
    const fetchForecastByCitySpy = jest
      .spyOn(api, 'fetchDailyForecastByCity')
      .mockReturnValue({
        city: {
          coord: 'coord',
        },
        list: [],
      } as unknown as Promise<Forecast>);

    await store.dispatch(fetchDailyForecast('New York'));

    expect(fetchForecastByCitySpy).toBeCalled();

    const state = store.getState();
    expect(state.weather.forecast).toStrictEqual({
      city: {
        coord: 'coord',
      },
      list: [],
    });
  });
});
