import { store } from 'store';

import * as api from 'weather/api/city';

import { CurrentWeather } from 'interfaces/weather';

import { searchCity } from './search';

describe('Search slice', () => {
  test('search city by name', async () => {
    const searchCityByNameSpy = jest
      .spyOn(api, 'fetchCurrentWeatherByCity')
      .mockReturnValue({
        base: 'city',
      } as unknown as Promise<CurrentWeather>);

    await store.dispatch(searchCity({
      form: {
        cityName: 'New York',
        latitude: '',
        longitude: '',
        zipCode: '',
      },
      type: 'city',
    }));

    expect(searchCityByNameSpy).toBeCalled();

    const state = store.getState();
    expect(state.search.searchItem).toStrictEqual({
      base: 'city',
    });
  });

  test('search city by coordinates', async () => {
    const searchCityByCoordinatesSpy = jest
      .spyOn(api, 'fetchCurrentWeatherByCoordinates')
      .mockReturnValue({
        base: 'coord',
      } as unknown as Promise<CurrentWeather>);

    await store.dispatch(searchCity({
      form: {
        cityName: '',
        latitude: '32.572',
        longitude: '12.634',
        zipCode: '',
      },
      type: 'coordinates',
    }));

    expect(searchCityByCoordinatesSpy).toBeCalled();

    const state = store.getState();
    expect(state.search.searchItem).toStrictEqual({
      base: 'coord',
    });
  });

  test('search city by zip code', async () => {
    const searchCityByZipCodeSpy = jest
      .spyOn(api, 'fetchCurrentWeatherByZipCode')
      .mockReturnValue({
        base: 'zip',
      } as unknown as Promise<CurrentWeather>);

    await store.dispatch(searchCity({
      form: {
        cityName: '',
        latitude: '',
        longitude: '',
        zipCode: '90210',
      },
      type: 'zip',
    }));

    expect(searchCityByZipCodeSpy).toBeCalled();

    const state = store.getState();
    expect(state.search.searchItem).toStrictEqual({
      base: 'zip',
    });
  });
});
