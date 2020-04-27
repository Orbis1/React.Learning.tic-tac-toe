import React from 'react';
import Square from './Square.js';
import { actionIncreaseStep } from '../store/actions.js';

export default function Board(props) {
    const {dispatch} = props;

    const SIZE_OF_SIDE = 3;
    const SIZE_OF_BOARD = SIZE_OF_SIDE * SIZE_OF_SIDE;

    const blocks = Array(SIZE_OF_BOARD);

    for (let i = 0; i < blocks.length; i++) {
        blocks[i] = <Square onClick={props.onClick} value = {i}/>
    };

    const wrapedRows = []; 

    for (let i = 0; i < SIZE_OF_BOARD; i+=3) {
        const start = i;
        const end = i + 3;
        const rows = blocks.slice(start, end);
        wrapedRows.push(
            <div className="board-row"> {rows} </div>
        );
        
    };

    return (
        <div>
            {wrapedRows}
        </div>
    );
}

