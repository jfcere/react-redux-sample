import { Theme } from '@material-ui/core';

import * as CoreTypes from './core.types';

export const loadTheme = (): CoreTypes.LoadTheme => {
  return {
    type: CoreTypes.CoreActionTypes.LOAD_THEME,
  };
};

export const loadThemeSuccess = (theme: Theme): CoreTypes.LoadThemeSuccess => {
  return {
    type: CoreTypes.CoreActionTypes.LOAD_THEME_SUCCESS,
    payload: theme,
  };
};

export const setTheme = (theme: Theme): CoreTypes.SetTheme => {
  return {
    type: CoreTypes.CoreActionTypes.SET_THEME,
    payload: theme,
  };
};
