import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: false,
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    requestCart: (state, action) => {
      const { userId } = action.payload;
      state.loading = true;
      console.log("Requesting cart data for " + userId);
    },
    cartSuccessResponse: (state, action) => {
      console.log("Success Action -", action);
      state.data = action.payload;
      state.error = false;
      state.loading = false;
    },
    cartFailureResponse: (state, action) => {
      console.log("Failure Action - ", action);
      state.error = true;
      state.loading = false;
    },
  },
});

export const { requestCart, cartSuccessResponse, cartFailureResponse } =
  cartSlice.actions;
export default cartSlice.reducer;
