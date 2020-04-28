import React from 'react';
import Square from './Square.js';

export default function Board(props) {

    const SIZE_OF_SIDE = 3;
    const SIZE_OF_BOARD = SIZE_OF_SIDE * SIZE_OF_SIDE;

    const blocks = Array(SIZE_OF_BOARD);

    for (let i = 0; i < blocks.length; i++) {
        blocks[i] = <Square onClick={() => props.onClick(i)} value={props.squares[i]} key={i}/>
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

/*
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
*/