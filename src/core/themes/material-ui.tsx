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
  overrides: {
    MuiFilledInput: {
      root: {
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
      },
      underline: {
        '&::before': {
          borderColor: 'transparent',
        },
      },
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
  overrides: {
    MuiFilledInput: {
      root: {
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
      },
      underline: {
        '&::before': {
          borderColor: 'transparent',
        },
      },
    },
  },
  props: {
    MuiFilledInput: {
      color: 'secondary',
    },
    MuiFormLabel: {
      color: 'secondary',
    },
    MuiLink: {
      color: 'secondary',
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
