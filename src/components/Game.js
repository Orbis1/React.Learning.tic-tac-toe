import React from 'react';
import Board from './Board.js';
import UndoRedo from '../containers/UndoRedo';
import { connect } from 'react-redux';
import { addHighScore } from '../actions/index';

let Game = ({status, gameOver, stepNumber, winner, addHighScore, highScore, pastStepNumber}) => {
    let highScoreList = '';
   // console.log(`gameOver ${gameOver} && ${stepNumber} != ${pastStepNumber}`);
    
    if (gameOver && (stepNumber != pastStepNumber)) {
        //highScoreList = `The player ${winner} won in ${stepNumber} moves`;
        //addHighScore(winner, stepNumber); // бесконченый цикл
    } 
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
                <ol>{highScoreList}</ol>
            </div>

        </div>
        );
}

const mapStateToProps = (state) => {
    const presentState = state.gamePlay.present;
    const highScore = state.highScore.scores;
    const pastLength = state.gamePlay.past.length-1;
    const pastStepNumber = (pastLength > 0) ? state.gamePlay.past[pastLength].stepNumber : 0;

    return {
      status: presentState.status,
      stepNumber: presentState.stepNumber,
      gameOver: presentState.gameOver,
      winner: presentState.xIsNext ? 'O' : 'X',
      highScore: highScore,
      pastStepNumber: pastStepNumber,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        addHighScore: (winner, move) => dispatch(addHighScore(winner, move)),
    }
}


Game = connect(mapStateToProps, mapDispatchToProps)(Game);

export default Game;
