import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  selectedUser: null,
  loading: false,
  error: null,
  pagination: {
    page: 1,
    perPage: 10,
    total: 0,
  },
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.list = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setUsersLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUsersError: (state, action) => {
      state.error = action.payload;
    },
    setUsersPagination: (state, action) => {
      state.pagination = { ...state.pagination, ...action.payload };
    },
    resetUsersState: () => initialState,
  },
});

export const {
  setUsers,
  setSelectedUser,
  setUsersLoading,
  setUsersError,
  setUsersPagination,
  resetUsersState,
} = usersSlice.actions;

export default usersSlice.reducer;
