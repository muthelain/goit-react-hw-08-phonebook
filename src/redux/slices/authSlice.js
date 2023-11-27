import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  logout,
  refreshCurrentUser,
  register,
} from 'redux/operations/authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, action) {},
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected](state, action) {},
    [login.pending](state, action) {},
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state, action) {},
    [logout.pending](state) {},
    [logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected](state, action) {},
    [refreshCurrentUser.pending](state) {
      state.isRefreshingCurrentUser = true;
    },
    [refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshingCurrentUser = false;
    },
    [refreshCurrentUser.rejected](state) {
      state.isRefreshingCurrentUser = false;
    },
  },
});

export const authReducer = authSlice.reducer;
