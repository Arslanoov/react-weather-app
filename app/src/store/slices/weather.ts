import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'store';

interface WeatherState {
  city: string
}

const initialState: WeatherState = {
  city: 'Moscow',
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fetchCity = createAsyncThunk('weather/fetchCity', async () => {
  await delay(2000);
  return 'Other city';
});

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity: (state, action) => {
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

export default weatherSlice.reducer;
