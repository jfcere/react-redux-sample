import { Box, Container, CssBaseline, Icon, IconButton, ThemeProvider } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { Suspense } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DynamicModuleLoader } from 'redux-dynamic-modules';

import { CoreAwareState, CoreModule } from './core.module';
import * as actions from './store/core.actions';
import { darkTheme, lightTheme } from './themes';

import GitHub from '../assets/github.svg';
import './app.scss';

const Hero = React.lazy(() => import('../hero'));
const Home = React.lazy(() => import('../home'));

const mapStateToProps = ({ core }: CoreAwareState) => {
  return core && {
    theme: core.theme,
  };
};

const mapDispatchToProps = {
  setTheme: actions.setTheme,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const App: React.FunctionComponent<Props> = (props) => {
  const {
    theme,
    setTheme,
  } = props;

  return (
    <DynamicModuleLoader modules={[CoreModule]}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Box flexGrow={1} clone={true}>
              <Typography variant="h6" noWrap={true}>
                react-redux
              </Typography>
            </Box>
            {theme === lightTheme && (
              <IconButton color="inherit" onClick={() => setTheme(darkTheme)}>
                <Icon>brightness_4</Icon>
              </IconButton>
            )}
            {theme === darkTheme && (
              <IconButton color="inherit" onClick={() => setTheme(lightTheme)}>
                <Icon>brightness_7</Icon>
              </IconButton>
            )}
            <IconButton color="inherit" href="https://github.com/jfcere/react-redux-sample">
              <img src={GitHub} alt="GitHub" />
            </IconButton>
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
    </DynamicModuleLoader>
  );
};

export default connector(App);
