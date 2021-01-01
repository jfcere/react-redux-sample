import { ISagaModule } from 'redux-dynamic-modules-saga';

import { loadHeroes, loadPowers } from './store/hero.actions';
import heroReducer, { HeroState } from './store/hero.reducer';
import heroSaga from './store/hero.saga';

export interface HeroAwareState {
  hero: HeroState;
}

export const HeroModule: ISagaModule<HeroAwareState> = {
  id: 'hero',
  reducerMap: { hero: heroReducer },
  sagas: [heroSaga],
  initialActions: [
    loadHeroes(),
    loadPowers(),
  ],
  finalActions: [],
};
