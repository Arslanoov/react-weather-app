import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'store';

import { CurrentWeather } from 'interfaces/weather';

import { getSavedCities } from 'storage/weatherStorage';

import { fetchCurrentWeatherByCity } from 'weather/api/city';

interface WeatherState {
  isEditMode: boolean,
  savedWeather: CurrentWeather[],
}

const initialState: WeatherState = {
  isEditMode: false,
  savedWeather: [],
};

export const fetchSavedCitiesWeather = createAsyncThunk('weather/fetchCurrentWeatherByCity', async () => {
  const cities: string[] = getSavedCities();
  const forecast: CurrentWeather[] = await Promise.all(cities.map((city) => fetchCurrentWeatherByCity(city)));
  console.log(forecast);
  return forecast;
});

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    toggleEditMode: (state: WeatherState) => {
      state.isEditMode = !state.isEditMode;
    },
  },
  extraReducers: {
    [fetchSavedCitiesWeather.fulfilled.type]: (state, action) => {
      state.savedWeather = action.payload;
    },
  },
});

export const isEditModeSelector = (state: RootState) => state.savedCities.isEditMode;
export const savedWeatherSelector = (state: RootState) => state.savedCities.savedWeather;

export const { toggleEditMode } = weatherSlice.actions;

export default weatherSlice.reducer;
