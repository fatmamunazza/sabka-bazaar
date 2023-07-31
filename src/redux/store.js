import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import authReducer from "./slice/authSlice";
import dashboardReducer from "./slice/dashboardSlice";
import productReducer from "./slice/productSlice";
import cartReducer from "./slice/cartSlice";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  product: productReducer,
  cart: cartReducer,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
export const persistor = persistStore(store);
sagaMiddleware.run(saga);
