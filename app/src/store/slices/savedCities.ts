import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

import { CurrentWeather } from 'interfaces/weather';

import { getSavedCities, removeCity, saveCity } from 'storage/weatherStorage';

import { fetchCurrentWeatherByCity } from 'weather/api/city';

interface SavedCitiesState {
  loading: boolean,
  savedWeather: CurrentWeather[],
}

const initialState: SavedCitiesState = {
  loading: false,
  savedWeather: [],
};

export const fetchSavedCitiesWeather = createAsyncThunk('savedCities/fetchCurrentWeatherByCity', async () => {
  const cities: string[] = getSavedCities();
  const promises = cities.map((city) => fetchCurrentWeatherByCity(city));
  return await Promise.all(promises);
});

export const addSavedCity = createAsyncThunk('savedCities/addSavedCity', async (name: string) => {
  saveCity(name);
  return await fetchCurrentWeatherByCity(name);
});

export const removeSavedCity = createAsyncThunk('savedCities/removedSavedCity', (name: string) => {
  removeCity(name);
  return name;
});

export const savedCitiesSlice = createSlice({
  name: 'savedCities',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSavedCitiesWeather.pending.type]: (state: SavedCitiesState) => {
      state.savedWeather = [];
      state.loading = true;
    },
    [fetchSavedCitiesWeather.fulfilled.type]: (state: SavedCitiesState, action: PayloadAction<CurrentWeather[]>) => {
      state.savedWeather = action.payload;
      state.loading = false;
    },
    [addSavedCity.fulfilled.type]: (state: SavedCitiesState, action: PayloadAction<CurrentWeather>) => {
      state.savedWeather.push(action.payload);
    },
    [removeSavedCity.fulfilled.type]: (state: SavedCitiesState, action: PayloadAction<string>) => {
      state.savedWeather = state.savedWeather.filter((weather) => weather.name !== action.payload);
    },
  },
});

export const savedWeatherLoadingSelector = (state: RootState) => state.savedCities.loading;
export const savedWeatherSelector = (state: RootState) => state.savedCities.savedWeather;

export default savedCitiesSlice.reducer;
