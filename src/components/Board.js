import React from 'react';
import Square from './Square.js';

export default function Board(props) {
    const SIZE_OF_BOARD = 3;  

    const board = Array(SIZE_OF_BOARD).fill(
        <div className="board-row">
            {Array(SIZE_OF_BOARD).fill(<Square />)}
        </div>
    );

    return (
        <div>
            {board}
        </div>
    );
}

