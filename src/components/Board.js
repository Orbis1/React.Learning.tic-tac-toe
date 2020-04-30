import React from 'react';
import Square from './Square.js';
import { connect } from 'react-redux';
import { clickCell } from '../actions/index';

let Board = ({ squares, onClick }) => {

    const SIZE_OF_SIDE = 3;
    const SIZE_OF_BOARD = SIZE_OF_SIDE * SIZE_OF_SIDE;

    const blocks = Array(SIZE_OF_BOARD);

    for (let i = 0; i < blocks.length; i++) {
        blocks[i] = <Square key={i} onClick={() => onClick(i)} value={squares[i]} />
    };

    const wrapedRows = []; 

    for (let i = 0; i < SIZE_OF_BOARD; i+=3) {
        const start = i;
        const end = i + 3;
        const rows = blocks.slice(start, end);
        wrapedRows.push(
            <div className="board-row" key={i}> {rows} </div>
        );
    };

    return (
        <div>
            {wrapedRows}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        squares: state.gamePlay.present.squares,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (i) => dispatch(clickCell(i)),
    }
}

Board = connect(mapStateToProps, mapDispatchToProps)(Board);

export default Board;