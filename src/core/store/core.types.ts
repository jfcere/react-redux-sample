import { Theme } from '@material-ui/core';

export enum CoreActionTypes {
  LOAD_THEME = '[Theme] Load theme',
  LOAD_THEME_SUCCESS = '[Theme] Loaded theme successfuly',
  SET_THEME = '[Theme] Set theme',
}

export interface LoadTheme {
  type: typeof CoreActionTypes.LOAD_THEME;
}

export interface LoadThemeSuccess {
  type: typeof CoreActionTypes.LOAD_THEME_SUCCESS;
  payload: Theme;
}

export interface SetTheme {
  type: typeof CoreActionTypes.SET_THEME;
  payload: Theme;
}

export type CoreActions
  = LoadTheme
  | LoadThemeSuccess
  | SetTheme;
