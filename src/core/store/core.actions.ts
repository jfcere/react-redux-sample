import { Theme } from '../models';
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

export const setThemeSuccess = (theme: Theme): CoreTypes.SetThemeSuccess => {
  return {
    type: CoreTypes.CoreActionTypes.SET_THEME_SUCCESS,
    payload: theme,
  };
};
