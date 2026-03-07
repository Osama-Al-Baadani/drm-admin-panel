import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../services/userService';

export const fetchUsers = createAsyncThunk('users/fetchAll', async (params) => {
  return await userService.getAll(params);
});

export const fetchUserById = createAsyncThunk('users/fetchById', async (id) => {
  return await userService.getById(id);
});

export const createUser = createAsyncThunk('users/create', async (data) => {
  return await userService.create(data);
});

export const updateUser = createAsyncThunk('users/update', async ({ id, data }) => {
  return await userService.update(id, data);
});

export const deleteUser = createAsyncThunk('users/delete', async (id) => {
  return await userService.delete(id);
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    selectedUser: null,
    loading: false,
    error: null,
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalItems: 0,
      pageSize: 10
    }
  },
  reducers: {
    clearSelectedUser: (state) => {
      state.selectedUser = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.data || [];
        state.pagination = action.payload.pagination || state.pagination;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.selectedUser = action.payload.data;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.list.push(action.payload.data);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.list.findIndex(u => u.id === action.payload.data.id);
        if (index !== -1) {
          state.list[index] = action.payload.data;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter(u => u.id !== action.meta.arg);
      });
  }
});

export const { clearSelectedUser } = usersSlice.actions;
export default usersSlice.reducer;
