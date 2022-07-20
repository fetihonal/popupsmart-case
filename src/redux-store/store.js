import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./slices/index";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware);
  },
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
