import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

import { CurrentWeather } from 'interfaces/weather';

import { fetchCurrentWeatherByCity } from 'weather/api/city';
import ApiError from 'errors/api';

interface WeatherState {
  currentWeather: CurrentWeather | null,
  fetchError: string | null,
}

const initialState: WeatherState = {
  currentWeather: null,
  fetchError: null,
};

// eslint-disable-next-line max-len
export const fetchCityWeather = createAsyncThunk('weather/fetchCurrentWeatherByCity', async (city: string) => await fetchCurrentWeatherByCity(city));

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    clearFetchError: (state: WeatherState) => {
      state.fetchError = null;
    },
  },
  extraReducers: {
    [fetchCityWeather.fulfilled.type]: (state: WeatherState, action: PayloadAction<CurrentWeather>) => {
      state.currentWeather = action.payload;
    },
    [fetchCityWeather.rejected.type]: (state: WeatherState, response: { error: ApiError }) => {
      state.fetchError = response.error.message;
    },
  },
});

export const currentWeatherSelector = (state: RootState) => state.weather.currentWeather;
export const fetchErrorSelector = (state: RootState) => state.weather.fetchError;

export const { clearFetchError } = weatherSlice.actions;

export default weatherSlice.reducer;
