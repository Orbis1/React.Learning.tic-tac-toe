import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game.js';

import { rootReducer } from './store/reducers.js';
import { createStore } from 'redux';
import {connect, Provider} from 'react-redux';
import undoable from 'redux-undo';
import { ActionCreators } from 'redux-undo';

const store = createStore(undoable(rootReducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const mapStateToProps = (state) => {
  state = state.present;
  return {
    squares: state.squares,
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