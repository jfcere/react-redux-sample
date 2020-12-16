import { ISagaModule } from 'redux-dynamic-modules-saga';

import coreReducer, { CoreState } from './store/core.reducer';
import coreSaga from './store/core.saga';

export interface CoreAwareState {
  core: CoreState;
}

export const CoreModule: ISagaModule<CoreAwareState> = {
  id: 'core',
  reducerMap: { core: coreReducer },
  sagas: [coreSaga],
  initialActions: [],
  finalActions: [],
};
