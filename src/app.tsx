import { Box, Button, Container, CssBaseline, Icon, ThemeProvider } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { configureStore } from './configure-store';
import MuiTheme from './themes';

import './app.scss';

const store = configureStore();
const Hero = React.lazy(() => import('./hero'));
const Home = React.lazy(() => import('./home'));

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={MuiTheme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Box flexGrow={1} clone={true}>
              <Typography variant="h6" noWrap={true}>
                react-redux
              </Typography>
            </Box>
            <Button className="mr-16" color="inherit" startIcon={<Icon>color_lens</Icon>}>Themes</Button>
            <Button color="inherit" variant="outlined">Github</Button>
          </Toolbar>
        </AppBar>
        <Container className="app-container" maxWidth="lg">
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/heroes" component={Hero}/>
                <Route path="/" component={Home}/>
              </Switch>
            </Suspense>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
