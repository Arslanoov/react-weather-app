import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

import { SearchForm } from 'interfaces/forms/searchForm';
import { CurrentWeather } from 'interfaces/weather';
import { SearchType } from 'interfaces/search';

import {
  fetchCurrentWeatherByCity,
  fetchCurrentWeatherByCoordinates,
  fetchCurrentWeatherByZipCode,
} from 'weather/api/city';

interface SearchState {
  searchItem: CurrentWeather | null,
}

const initialState: SearchState = {
  searchItem: null,
};

export const searchCity = createAsyncThunk('search/searchCity', async (payload: {
  form: SearchForm,
  type: SearchType,
}) => {
  if (payload.type === 'city') {
    return await fetchCurrentWeatherByCity(payload.form.cityName);
  }

  if (payload.type === 'coordinates') {
    return await fetchCurrentWeatherByCoordinates(payload.form.latitude, payload.form.longitude);
  }

  if (payload.type === 'zip') {
    return await fetchCurrentWeatherByZipCode(payload.form.zipCode);
  }

  return null;
});

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    [searchCity.fulfilled.type]: (state: SearchState, action: PayloadAction<CurrentWeather>) => {
      state.searchItem = action.payload;
    },
  },
});

export const searchItemSelector = (state: RootState) => state.search.searchItem;
