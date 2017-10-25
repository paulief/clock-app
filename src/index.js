import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './helpers/configureStore';
import App from './App';

const store = configureStore();

const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootComponent, document.getElementById('root'));
