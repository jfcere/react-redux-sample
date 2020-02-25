import { createMuiTheme } from '@material-ui/core/styles';

export const MuiTheme = createMuiTheme({
  palette: {
    type: 'light',
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
