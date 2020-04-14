import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider } from 'react-redux';

import './index.css';
// import Card from './Card';
// import Cardlist from './Cardlist';
import App from './containers/App.js';  //father of all components
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots } from './reducers';
// import { robots } from './robots';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// using json placeholder, life cycle methods (they trigger when the app is
// loaded on the website)