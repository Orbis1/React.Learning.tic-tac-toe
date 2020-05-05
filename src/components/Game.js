import React from 'react';
import Board from './Board.js';
import UndoRedo from '../containers/UndoRedo';
import { connect } from 'react-redux';
import HighScoreList from '../containers/HighScoreList'

let Game = ({ status }) => {
    return (
    <div className="container">
    <h1 className="nameOfGame">Tic Tac Toe</h1>

        <div className="item-a">
            <Board />
        </div>

        <div className="item-b">
            <div>{status}</div>               
            <UndoRedo />
        </div>

        <div className="item-c">
            <h2>High Scores:</h2>
            <HighScoreList />
        </div>

        

    </div>
    );
}

const mapStateToProps = (state) => {
    const presentState = state.gamePlay.present;
    return {
      status: presentState.status,
    }
  }

Game = connect(mapStateToProps)(Game);

export default Game;
