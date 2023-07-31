import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    userId: "",
    userName: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = {
        userId: action?.payload?.data?._id,
        userName: action?.payload?.data?.name,
      };
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {
        userId: "",
        userName: "",
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
