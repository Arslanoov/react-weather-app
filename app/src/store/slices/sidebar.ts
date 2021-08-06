import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/index';

interface SidebarState {
  isCollapsed: boolean,
}

const initialState: SidebarState = {
  isCollapsed: true,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state: SidebarState) => {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export const isCollapsedSidebarSelector = (state: RootState) => state.sidebar.isCollapsed;
