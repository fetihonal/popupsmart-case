import { combineReducers } from "redux";
import modalDataReducer, { modalDataActions } from "./data";

export const modalReducer = combineReducers({
  data: modalDataReducer,
});

export const modalActions = {
  data: modalDataActions,
};
