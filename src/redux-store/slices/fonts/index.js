import { combineReducers } from "redux";
import listReducer, { listActions } from "../../slices/fonts/list";

export const listeReducer = combineReducers({
  list: listReducer,
});

export const listeActions = {
  list: listActions,
};
