import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import { weatherSlice } from './slices/savedCities';
import { sidebarSlice } from './slices/sidebar';

export const store = configureStore({
  reducer: {
    savedCities: weatherSlice.reducer,
    sidebar: sidebarSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
