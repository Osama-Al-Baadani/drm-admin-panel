import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const devicesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    setDevices: (state, action) => {
      state.list = action.payload;
    },
    setDevicesLoading: (state, action) => {
      state.loading = action.payload;
    },
    setDevicesError: (state, action) => {
      state.error = action.payload;
    },
    resetDevicesState: () => initialState,
  },
});

export const { setDevices, setDevicesLoading, setDevicesError, resetDevicesState } = devicesSlice.actions;
export default devicesSlice.reducer;
