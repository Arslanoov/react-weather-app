import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

import { CurrentWeather } from 'interfaces/weather';
import { Forecast } from 'interfaces/forecast';

import { fetchCurrentWeatherByCity, fetchDailyForecastByCity } from 'weather/api/city';
import ApiError from 'errors/api';

interface WeatherState {
  currentWeather: CurrentWeather | null,
  forecast: Forecast | null,
  fetchError: string | null,
}

const initialState: WeatherState = {
  currentWeather: null,
  forecast: null,
  fetchError: null,
};

export const fetchCityWeather = createAsyncThunk(
  'weather/fetchCurrentWeather',
  async (city: string) => await fetchCurrentWeatherByCity(city),
);

export const fetchDailyForecast = createAsyncThunk(
  'weather/fetchDailyForecast',
  async (city: string) => await fetchDailyForecastByCity(city),
);

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
    [fetchDailyForecast.fulfilled.type]: (state: WeatherState, action: PayloadAction<Forecast>) => {
      state.forecast = {
        ...action.payload,
        list: action.payload.list.filter((_, index) => index % 8 === 0),
      };
    },
    [fetchDailyForecast.rejected.type]: (state: WeatherState, response: { error: ApiError }) => {
      state.fetchError = response.error.message;
    },
  },
});

export const currentWeatherSelector = (state: RootState) => state.weather.currentWeather;
export const forecastSelector = (state: RootState) => state.weather.forecast;
export const fetchErrorSelector = (state: RootState) => state.weather.fetchError;

export const { clearFetchError } = weatherSlice.actions;

export default weatherSlice.reducer;
