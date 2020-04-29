import React from 'react';
import Board from './Board.js';
import { clickCell } from '../store/actions.js';
import UndoRedo from '../containers/UndoRedo';


export default function Game(props) {
    const {dispatch, squares, status, gameOver} = props;
    // const current = history[stepNumber];


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
                    squares={squares}
                    onClick={onClick}
                />
            </div>
            <div className="item-b">
                <div>{status}</div>               
                <UndoRedo />
            </div>
        </div>
        );

}