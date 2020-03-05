import { Theme } from '@material-ui/core';

import { CoreActionTypes } from './core.types';

export const loadTheme = () => {
  return {
    type: CoreActionTypes.LOAD_THEME,
  };
};

export const loadThemeSuccess = (theme: Theme) => {
  return {
    type: CoreActionTypes.LOAD_THEME_SUCCESS,
    payload: theme,
  };
};

export const setTheme = (theme: Theme) => {
  return {
    type: CoreActionTypes.SET_THEME,
    payload: theme,
  };
};
