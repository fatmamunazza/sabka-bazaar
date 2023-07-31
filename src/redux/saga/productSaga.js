import { call, put } from "redux-saga/effects";
import { getProducts } from "../../services/productApi";
import {
  productFailureResponse,
  productSuccessResponse,
} from "../slice/productSlice";

export function* productData(category) {
  try {
    const response = yield call(getProducts, category);
    console.log("data - ", response);
    yield put(productSuccessResponse(response.data));
  } catch (e) {
    console.log("munazza", e);
    yield put(productFailureResponse());
  }
}
