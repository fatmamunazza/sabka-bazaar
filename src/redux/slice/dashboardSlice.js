import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: false,
  loading: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    requestDashboard: (state) => {
      state.loading = true;
      console.log("Requesting dashboard data action...");
    },
    dashboardSuccessResponse: (state, action) => {
      console.log("Success Action -", action);
      state.data = action.payload;
      state.error = false;
      state.loading = false;
    },
    dashboardFailureResponse: (state, action) => {
      console.log("Failure Action action");
      state.error = true;
      state.loading = false;
    },
  },
});

export const {
  requestDashboard,
  dashboardSuccessResponse,
  dashboardFailureResponse,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
