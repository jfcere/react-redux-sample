import { Theme } from '../models';
import { CoreActions, CoreActionTypes } from './core.types';

export interface CoreState {
  theme: Theme;
  loadingTheme: boolean;
}

const initialState: CoreState = {
  theme: Theme.Light,
  loadingTheme: false,
};

const reducer = (state = initialState, action: CoreActions): CoreState => {
  switch (action.type) {
    case CoreActionTypes.LOAD_THEME:
      return {
        ...state,
        loadingTheme: true,
      };
    case CoreActionTypes.LOAD_THEME_SUCCESS:
      return {
        ...state,
        theme: action.payload,
        loadingTheme: false,
      };
    case CoreActionTypes.SET_THEME_SUCCESS:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
