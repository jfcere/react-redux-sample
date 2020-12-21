import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { HeroApi } from '../api';
import { ViewMode } from '../models';
import * as actions from './hero.actions';
import { HeroActionTypes } from './hero.types';

function* addHero(action: ReturnType<typeof actions.addHero>) {
  const hero = yield call(() => HeroApi.createHero(action.payload));
  yield put(actions.addHeroSuccess(hero));
  yield put(actions.setViewMode(ViewMode.List));
  yield put(actions.showSnackbar(`${ action.payload.name } has been added successfully`));
}

function* loadHeroes() {
  const heroes = yield call(HeroApi.getHeroes);
  yield put(actions.loadHeroesSuccess(heroes));
}

function* loadPowers() {
  const powers = yield call(HeroApi.getPowers);
  yield put(actions.loadPowersSuccess(powers));
}

function* removeHero(action: ReturnType<typeof actions.removeHero>) {
  const hero = yield call(() => HeroApi.deleteHero(action.payload));
  yield put(actions.removeHeroSuccess(hero));
  yield put(actions.showSnackbar(`${ action.payload.name } has been removed successfully`));
}

function* updateHero(action: ReturnType<typeof actions.updateHero>) {
  const hero = yield call(() => HeroApi.updateHero(action.payload));
  yield put(actions.updateHeroSuccess(action.payload));
  yield put(actions.setViewMode(ViewMode.List));
  yield put(actions.showSnackbar(`${ action.payload.name } has been updated successfully`));
}

function* watchRequests() {
  yield takeLatest(HeroActionTypes.ADD_HERO, addHero);
  yield takeLatest(HeroActionTypes.LOAD_HEROES, loadHeroes);
  yield takeLatest(HeroActionTypes.LOAD_POWERS, loadPowers);
  yield takeLatest(HeroActionTypes.REMOVE_HERO, removeHero);
  yield takeLatest(HeroActionTypes.UPDATE_HERO, updateHero);
}

function* heroSaga() {
  yield all([fork(watchRequests)]);
}

export default heroSaga;
