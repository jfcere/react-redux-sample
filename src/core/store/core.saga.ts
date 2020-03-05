import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { CoreApi } from '../api';
import * as actions from './core.actions';
import * as types from './core.types';

function* loadTheme() {
  const response = yield call(CoreApi.getTheme);
  yield put(actions.loadThemeSuccess(response));
}

function* watchRequests() {
  yield takeLatest(types.CoreActionTypes.LOAD_THEME, loadTheme);
}

function* coreSaga() {
  yield all([fork(watchRequests)]);
}

export default coreSaga;
