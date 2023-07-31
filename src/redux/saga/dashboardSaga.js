import { call, put } from "redux-saga/effects";
import { getDashboardData } from "../../services/dashboardApi";
import {
  dashboardFailureResponse,
  dashboardSuccessResponse,
} from "../slice/dashboardSlice";

export function* fetchDashboard() {
  try {
    const response = yield call(getDashboardData);
    console.log("data", response);
    yield put(dashboardSuccessResponse(response.data));
  } catch (e) {
    yield put(dashboardFailureResponse());
  }
}
