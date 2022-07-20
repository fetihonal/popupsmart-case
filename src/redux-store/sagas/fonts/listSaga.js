import { put, takeLatest, all } from "redux-saga/effects";
import { rootActions } from "../../slices/index";
import axios from "axios";

const { onRequest, onSuccess, onFailure } = rootActions.font.list;

function* listSagaTask(args) {
  const { payload } = args;

  try {
    const response = yield axios.get(
      `https://apiv2.popupsmart.com/api/googlefont`
    );
    if (true) {
      yield put(onSuccess(response));
    }
  } catch (error) {
    yield put(onFailure(error));
  }
}

function* listSaga() {
  yield all([takeLatest(onRequest, listSagaTask)]);
}

export default listSaga;
