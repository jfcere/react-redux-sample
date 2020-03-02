import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';

export function configureStore(): IModuleStore<any> {
  return createStore({
    extensions: [getSagaExtension()],
  });
}
