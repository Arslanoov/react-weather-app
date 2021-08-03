import { store } from 'store';

import * as api from 'weather/api/city';
import reducer, { setCity, fetchCity } from './weather';

test('should set city', () => {
  expect(reducer({
    city: 'Moscow',
  }, setCity('New city'))).toEqual({
    city: 'New city',
  });
});

test('should fetch city', async () => {
  const city = 'New York';
  const postSpy = jest.spyOn(api, 'fetchCityRequest').mockResolvedValueOnce(city);

  await store.dispatch(fetchCity());
  expect(postSpy).toBeCalled();
  const state = store.getState();
  expect(state).toEqual({
    weather: {
      city,
    },
  });
});
