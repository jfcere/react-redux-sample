import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import heroReducer from './hero/store';
import { HeroState } from './hero/store/hero.reducer';
import heroSaga from './hero/store/hero.saga';

export interface ApplicationState {
  hero: HeroState;
}

export function* rootSaga() {
  yield all([fork(heroSaga)]);
}

export function configureStore(): Store<ApplicationState> {

  const rootReducer = combineReducers<ApplicationState>({
    hero: heroReducer,
  });

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}