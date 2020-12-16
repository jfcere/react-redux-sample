import { ISagaModule } from 'redux-dynamic-modules-saga';

import heroReducer, { HeroState } from './store/hero.reducer';
import heroSaga from './store/hero.saga';

export interface HeroAwareState {
  hero: HeroState;
}

export const HeroModule: ISagaModule<HeroAwareState> = {
  id: 'hero',
  reducerMap: { hero: heroReducer },
  sagas: [heroSaga],
  initialActions: [],
  finalActions: [],
};
