import { Theme as MuiTheme } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

import { Theme } from '../models';

export const lightTheme = createMuiTheme({
  palette: {
    type: Theme.Light,
    primary: {
      light: '#e1ecff',
      main: '#1d8ef1',
    },
    secondary: {
      main: '#42a6f5',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: [
      'Varela Round',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: Theme.Dark,
    primary: {
      light: '#18ffff',
      main: '#212121',
    },
    secondary: {
      main: '#26c6da',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: [
      'Varela Round',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

export const availableThemes: Map<Theme, MuiTheme> = new Map([
  [Theme.Light, lightTheme],
  [Theme.Dark, darkTheme],
]);
