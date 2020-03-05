import { Theme } from '@material-ui/core';

import { lightTheme } from '../themes/material-ui';
import { CoreActions, CoreActionTypes } from './core.types';

export interface CoreState {
  theme: Theme;
}

const initialState: CoreState = {
  theme: lightTheme,
};

const reducer = (state = initialState, action: CoreActions): CoreState => {
  switch (action.type) {
    case CoreActionTypes.LOAD_THEME_SUCCESS:
      return {
        ...state,
        theme: action.payload,
      };
    case CoreActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
