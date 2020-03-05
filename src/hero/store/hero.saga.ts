import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';

import { HeroApi } from '../api';
import { Hero, ViewMode } from '../models';
import * as actions from './hero.actions';
import { HeroState } from './hero.reducer';
import * as types from './hero.types';

const heroState = (state: HeroState) => state;

function* addHero(action: ReturnType<typeof actions.addHero>) {
  const { heroes } = yield select(heroState);
  yield put(actions.addHeroSuccess({ ...action.payload, id: genId(heroes) }));
  yield put(actions.setViewMode(ViewMode.List));
  yield put(actions.showSnackbar(`${ action.payload.name } has been added successfully`));
}

function* loadHeroes() {
  const response = yield call(HeroApi.getHeroes);
  yield put(actions.loadHeroesSuccess(response));
}

function* loadPowers() {
  const response = yield call(HeroApi.getPowers);
  yield put(actions.loadPowersSuccess(response));
}

function* removeHero(action: ReturnType<typeof actions.removeHero>) {
  yield put(actions.removeHeroSuccess(action.payload));
  yield put(actions.showSnackbar(`${ action.payload.name } has been removed successfully`));
}

function* updateHero(action: ReturnType<typeof actions.updateHero>) {
  yield put(actions.updateHeroSuccess(action.payload));
  yield put(actions.setViewMode(ViewMode.List));
  yield put(actions.showSnackbar(`${ action.payload.name } has been updated successfully`));
}

function* watchRequests() {
  yield takeLatest(types.HeroActionTypes.ADD_HERO, addHero);
  yield takeLatest(types.HeroActionTypes.LOAD_HEROES, loadHeroes);
  yield takeLatest(types.HeroActionTypes.LOAD_POWERS, loadPowers);
  yield takeLatest(types.HeroActionTypes.REMOVE_HERO, removeHero);
  yield takeLatest(types.HeroActionTypes.UPDATE_HERO, updateHero);
}

function* heroSaga() {
  yield all([fork(watchRequests)]);
}

function genId(heroes: Hero[]): number {
  return heroes.length > 0
    ? Math.max(...heroes.map(hero => hero.id)) + 1
    : 1;
}

export default heroSaga;
