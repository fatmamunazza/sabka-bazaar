import { requestDashboard } from "../slice/dashboardSlice";
import { requestProduct } from "../slice/productSlice";
import { requestCart } from "../slice/cartSlice";
import { fetchDashboard } from "./dashboardSaga";
import { productData } from "./productSaga";
import { cartData } from "./cartSage";
import { takeEvery } from "redux-saga/effects";

function* saga() {
  yield takeEvery(requestDashboard, fetchDashboard);
  yield takeEvery(requestProduct, handleProductData);
  yield takeEvery(requestCart, handleCartData);
}

function* handleProductData(action) {
  const { category } = action.payload;
  yield productData(category);
}

function* handleCartData(action) {
  const userId = action.payload;
  console.log("cart", userId);
  yield cartData(userId);
}

export default saga;
