import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';
import { thunk } from './middleware';
import rootReducer from './reducers';
import './style/style.css';

const middleware = [thunk];
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
  : compose;

const store = createStore(
  rootReducer,
  composeSetup(applyMiddleware(...middleware)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
