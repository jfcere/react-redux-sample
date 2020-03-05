import { ISagaModule } from 'redux-dynamic-modules-saga';

import coreReducer, { CoreState } from './store/core.reducer';
import coreSaga from './store/core.saga';

export interface CoreAwareState {
  core: CoreState;
}

export const CoreModule: ISagaModule<CoreState> = {
  id: 'core',
  reducerMap: {
    core: coreReducer,
  } as any,
  sagas: [coreSaga],
  initialActions: [],
  finalActions: [],
};
