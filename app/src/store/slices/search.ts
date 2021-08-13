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
import ApiError from 'errors/api';

interface SearchState {
  searchItem: CurrentWeather | null,
  error: string | null,
  loading: boolean,
}

const initialState: SearchState = {
  searchItem: null,
  error: null,
  loading: false,
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
    [searchCity.pending.type]: (state: SearchState) => {
      state.searchItem = null;
      state.error = null;
      state.loading = true;
    },
    [searchCity.fulfilled.type]: (state: SearchState, action: PayloadAction<CurrentWeather>) => {
      state.searchItem = action.payload;
      state.error = null;
      state.loading = false;
    },
    [searchCity.rejected.type]: (state: SearchState, response: { error: ApiError }) => {
      state.searchItem = null;
      state.error = response.error.message;
    },
  },
});

export const searchItemSelector = (state: RootState) => state.search.searchItem;
export const searchErrorSelector = (state: RootState) => state.search.error;
export const searchLoadingSelector = (state: RootState) => state.search.loading;
