import { call, put } from "redux-saga/effects";
import { getCartDetails } from "../../services/cartApi";
import { cartFailureResponse, cartSuccessResponse } from "../slice/cartSlice";

export function* cartData(userId) {
  try {
    const response = yield call(getCartDetails, userId);
    console.log("data - ", response);
    yield put(cartSuccessResponse(response.data));
  } catch (e) {
    console.log("error - ", e);
    yield put(cartFailureResponse());
  }
}
