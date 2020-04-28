import React from 'react';
import Board from './Board.js';
import { clickCell } from '../store/actions.js';

export default function Game(props) {
    const {dispatch, history, stepNumber, status, gameOver} = props;
    const current = history[stepNumber];

    const onClick = (i) => {
        if(gameOver === false) {
            return dispatch(clickCell(i));
        } else {
            return;
        }
    };

    return (
        <div className="container">
            <div className="item-a">
                <Board 
                    squares={current.squares}
                    onClick={onClick}
                />
            </div>
            <div className="item-b">
                <div>{status}</div>
                <ol>moves</ol>
            </div>
        </div>
        );

}