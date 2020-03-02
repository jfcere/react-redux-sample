import { ISagaModule } from 'redux-dynamic-modules-saga';

import heroReducer, { HeroState } from './store/hero.reducer';
import heroSaga from './store/hero.saga';

export interface HeroAwareState {
  hero: HeroState;
}

export const HeroModule: ISagaModule<HeroState> = {
  id: 'hero',
  reducerMap: {
    hero: heroReducer,
  } as any,
  sagas: [heroSaga],
  initialActions: [],
  finalActions: [],
};
