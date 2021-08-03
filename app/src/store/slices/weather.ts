import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

import { fetchCityRequest } from 'weather/api/city';

interface WeatherState {
  city: string
}

const initialState: WeatherState = {
  city: 'Moscow',
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fetchCity = createAsyncThunk('weather/fetchCity', async () => {
  await delay(2000);
  const city = await fetchCityRequest();
  console.log(city);
  return city;
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
  },
});

export const citySelector = (state: RootState) => `City: ${state.weather.city}`;

export const { setCity } = weatherSlice.actions;

export default weatherSlice.reducer;
