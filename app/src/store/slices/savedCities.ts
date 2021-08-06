import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

import { CurrentWeather } from 'interfaces/weather';

import { getSavedCities, removeCity, saveCity } from 'storage/weatherStorage';

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
  const promises = cities.map((city) => fetchCurrentWeatherByCity(city));
  return await Promise.all(promises);
});

export const addSavedCity = createAsyncThunk('weather/addSavedCity', async (name: string) => {
  saveCity(name);
  return await fetchCurrentWeatherByCity(name);
});

export const removeSavedCity = createAsyncThunk('weather/removedSavedCity', (name: string) => {
  removeCity(name);
  return name;
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
    [fetchSavedCitiesWeather.fulfilled.type]: (state: WeatherState, action: PayloadAction<CurrentWeather[]>) => {
      state.savedWeather = action.payload;
    },
    [addSavedCity.fulfilled.type]: (state: WeatherState, action: PayloadAction<CurrentWeather>) => {
      state.savedWeather.push(action.payload);
    },
    [removeSavedCity.fulfilled.type]: (state: WeatherState, action: PayloadAction<string>) => {
      state.savedWeather = state.savedWeather.filter((weather) => weather.name !== action.payload);
    },
  },
});

export const isEditModeSelector = (state: RootState) => state.savedCities.isEditMode;
export const savedWeatherSelector = (state: RootState) => state.savedCities.savedWeather;

export const { toggleEditMode } = weatherSlice.actions;

export default weatherSlice.reducer;
