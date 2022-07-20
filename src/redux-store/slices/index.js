import { combineReducers } from "redux";
import { listeReducer, listeActions } from "../slices/fonts/index";
import { modalReducer, modalActions } from "../slices/modal/index";
export const rootReducer = combineReducers({
  font: listeReducer,
  form: modalReducer,
});
export const rootActions = {
  font: listeActions,
  form: modalActions,
};
