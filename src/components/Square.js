import React from 'react';

export default function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

/*
  const {dispatch, squares, status, gameOver} = props;
  // const current = history[stepNumber];


  const onClick = (i) => {
      if(gameOver === false) {
          return dispatch(clickCell(i));
      } else {
          return;
      }
  };


const mapStateToProps = (state) => {
  state = state.gamePlay.present;
  return {
    squares: state.squares,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext,
    status: state.status,
    gameOver: state.gameOver,
  };
};

const WrappedGame = connect(mapStateToProps)(Game);

const {dispatch, squares, status, gameOver} = props;
// const current = history[stepNumber];


const onClick = (i) => {
    if(gameOver === false) {
        return dispatch(clickCell(i));
    } else {
        return;
    }
};


*/