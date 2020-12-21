import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './core';
import { configureStore } from './core/configure-store';
import './index.scss';
import { makeServer } from './server/index';
import * as serviceWorker from './serviceWorker';

makeServer();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
