import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

import { CurrentWeather } from 'interfaces/weather';

import { getSavedCities } from 'storage/weatherStorage';

import { fetchCityRequest, fetchCurrentWeatherByCity } from 'weather/api/city';

interface WeatherState {
  city: string,
  savedWeather: CurrentWeather[],
}

const initialState: WeatherState = {
  city: 'Moscow',
  savedWeather: [],
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fetchCity = createAsyncThunk('weather/fetchCity', async () => {
  await delay(2000);
  const city = await fetchCityRequest();
  console.log(city);
  return city;
});

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
    setCity: (state: WeatherState, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
  extraReducers: {
    [fetchCity.fulfilled.type]: (state, action) => {
      state.city = action.payload;
    },
    [fetchSavedCitiesWeather.fulfilled.type]: (state, action) => {
      state.savedWeather = action.payload;
    },
  },
});

export const citySelector = (state: RootState) => `City: ${state.weather.city}`;
export const savedWeatherSelector = (state: RootState) => state.weather.savedWeather;

export const { setCity } = weatherSlice.actions;

export default weatherSlice.reducer;
