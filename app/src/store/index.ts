import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import { savedCitiesSlice } from './slices/savedCities';
import { sidebarSlice } from './slices/sidebar';
import { searchSlice } from './slices/search';
import { weatherSlice } from './slices/weather';

export const store = configureStore({
  reducer: {
    savedCities: savedCitiesSlice.reducer,
    sidebar: sidebarSlice.reducer,
    search: searchSlice.reducer,
    weather: weatherSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
