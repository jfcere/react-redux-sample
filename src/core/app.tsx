import { Box, Container, CssBaseline, Icon, IconButton, Theme as MuiTheme, ThemeProvider, useMediaQuery } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { Suspense, useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DynamicModuleLoader } from 'redux-dynamic-modules';

import { CoreAwareState, CoreModule } from './core.module';
import { Theme } from './models';
import * as actions from './store/core.actions';
import { availableThemes } from './themes';

import GitHub from '../assets/github.svg';
import './app.scss';

const Hero = React.lazy(() => import('../hero'));
const Home = React.lazy(() => import('../home'));

const mapStateToProps = ({ core }: CoreAwareState) => {
  return {
    theme: core?.theme,
    loadingTheme: core?.loadingTheme,
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
    loadingTheme,
    setTheme,
  } = props;

  const [muiTheme, setMuiTheme] = useState<MuiTheme>();

  const smAndDown = useMediaQuery(muiTheme?.breakpoints.down('sm') || '');

  const themesMap = availableThemes;

  useEffect(() => {
    if (loadingTheme === false) {
      setMuiTheme(themesMap.get(theme));
    }
  }, [loadingTheme, theme, themesMap]);

  return (
    <DynamicModuleLoader modules={[CoreModule]}>
      {muiTheme && (
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <AppBar position="sticky">
            <Toolbar>
              <Box flexGrow={1} clone={true}>
                <Typography variant="h6" noWrap={true}>
                  react-redux
                </Typography>
              </Box>
              {theme === Theme.Light && (
                <IconButton color="inherit" onClick={() => setTheme(Theme.Dark)}>
                  <Icon>brightness_4</Icon>
                </IconButton>
              )}
              {theme === Theme.Dark && (
                <IconButton color="inherit" onClick={() => setTheme(Theme.Light)}>
                  <Icon>brightness_7</Icon>
                </IconButton>
              )}
              <IconButton color="inherit" href="https://github.com/jfcere/react-redux-sample">
                <img src={GitHub} alt="GitHub" />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Container className="app-container" maxWidth="lg" disableGutters={smAndDown}>
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
      )}
    </DynamicModuleLoader>
  );
};

export default connector(App);
