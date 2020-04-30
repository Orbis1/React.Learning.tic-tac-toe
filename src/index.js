import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game.js';

import { rootReducer } from './reducers/index.js';
import { applyMiddleware, createStore, compose } from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger'

const store = createStore(
  rootReducer
  ,compose(
    applyMiddleware(logger)
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

ReactDOM.render(<Provider store = {store}>
    <Game/>
</Provider>, document.getElementById('root'));