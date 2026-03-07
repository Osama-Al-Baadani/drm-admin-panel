import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/authService';

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
  return await authService.login(email, password);
});

export const getMe = createAsyncThunk('auth/getMe', async () => {
  return await authService.getMe();
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    role: null,
    loading: false,
    error: null
  },
  reducers: {
    logout: (state) => {
      authService.logout();
      state.user = null;
      state.token = null;
      state.role = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.role = action.payload?.role;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.user.role;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.role = action.payload.data.role;
      });
  }
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
