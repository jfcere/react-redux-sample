import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { CoreApi } from '../api';
import * as actions from './core.actions';
import { CoreActionTypes } from './core.types';

function* loadTheme() {
  const theme = yield call(CoreApi.getTheme);
  yield put(actions.loadThemeSuccess(theme));
}

function* setTheme(action: ReturnType<typeof actions.setTheme>) {
  yield call(() => CoreApi.setTheme(action.payload));
  yield put(actions.setThemeSuccess(action.payload));
}

function* watchRequests() {
  yield takeLatest(CoreActionTypes.LOAD_THEME, loadTheme);
  yield takeLatest(CoreActionTypes.SET_THEME, setTheme);
}

function* coreSaga() {
  yield all([fork(watchRequests)]);
}

export default coreSaga;
