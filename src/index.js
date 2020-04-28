import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game.js';

import { rootReducer } from './store/reducers.js';
import { createStore } from 'redux';
import {connect, Provider} from 'react-redux';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const mapStateToProps = (state) => {
  return {
    history: state.history,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext,
    status: state.status,
    gameOver: state.gameOver,
  };
};

const WrappedGame = connect(mapStateToProps)(Game);

ReactDOM.render(<Provider store = {store}>
    <WrappedGame/>
</Provider>, document.getElementById('root'));