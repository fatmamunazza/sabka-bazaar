import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: false,
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    requestProduct: (state, action) => {
      const { category } = action.payload;
      state.loading = true;
      console.log("Requesting product data for " + category);
    },
    productSuccessResponse: (state, action) => {
      console.log("Success Action -", action);
      state.data = action.payload;
      state.error = false;
      state.loading = false;
    },
    productFailureResponse: (state, action) => {
      console.log("Failure Action - ", action);
      state.error = true;
      state.loading = false;
    },
  },
});

export const {
  requestProduct,
  productSuccessResponse,
  productFailureResponse,
} = productSlice.actions;
export default productSlice.reducer;
