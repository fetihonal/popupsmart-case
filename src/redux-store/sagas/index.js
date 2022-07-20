import { all } from "@redux-saga/core/effects";
import list from "./fonts";
function* rootSaga() {
  yield all([...list]);
}

export default rootSaga;
