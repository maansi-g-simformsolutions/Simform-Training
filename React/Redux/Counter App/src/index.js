import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './style.css';

import CounterPage from './CounterPage';

ReactDOM.render(
  <Provider store={store}>
    <CounterPage />
  </Provider>,
  document.getElementById('root')
);
