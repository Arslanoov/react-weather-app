import { store } from 'store';

import * as api from 'weather/api/city';
import * as weatherStorage from 'storage/weatherStorage';
import { CurrentWeather } from 'interfaces/weather';
import { addSavedCity, fetchSavedCitiesWeather, removeSavedCity } from './savedCities';

test('fetch saved cities weather', async () => {
  const savedCities: string[] = ['Moscow', 'Los Angeles'];

  const fetchWeatherByCitySpy = jest
    .spyOn(api, 'fetchCurrentWeatherByCity')
    .mockReturnValue({} as Promise<CurrentWeather>);
  const getSavedCitiesSpy = jest.spyOn(weatherStorage, 'getSavedCities').mockReturnValue(savedCities);

  await store.dispatch(fetchSavedCitiesWeather());
  const state = store.getState();
  expect(fetchWeatherByCitySpy).toBeCalledTimes(savedCities.length);
  expect(getSavedCitiesSpy).toBeCalled();
  expect(state.savedCities.savedWeather).toStrictEqual([{}, {}]);
});

test('add saved city', async () => {
  const city = 'Los Angeles';
  const addSavedCitySpy = jest.spyOn(weatherStorage, 'saveCity');
  const fetchWeatherByCitySpy = jest
    .spyOn(api, 'fetchCurrentWeatherByCity')
    .mockReturnValue({} as Promise<CurrentWeather>);

  await store.dispatch(addSavedCity(city));
  const state = store.getState();
  expect(addSavedCitySpy).toBeCalled();
  expect(fetchWeatherByCitySpy).toBeCalled();
  expect(state.savedCities.savedWeather).toStrictEqual([{}, {}, {}]);
});

test('remove saved city', async () => {
  const savedCities: string[] = ['Moscow', 'Los Angeles'];
  const cityToRemove = 'Moscow';
  const getSavedCitiesSpy = jest.spyOn(weatherStorage, 'getSavedCities').mockReturnValue(savedCities);

  await store.dispatch(removeSavedCity(cityToRemove));
  const state = store.getState();
  expect(getSavedCitiesSpy).toBeCalled();
  expect(state.savedCities.savedWeather).toStrictEqual([{}]);
});
