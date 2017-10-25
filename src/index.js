import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './helpers/configureStore';
import AppContainer from './containers/AppContainer';

const store = configureStore();

const rootComponent = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(rootComponent, document.getElementById('root'));
