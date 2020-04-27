import React from 'react';

export default function Square(props) {
    //const {dispatch} = props;
    //console.log(dispatch); 
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  //<button className="square" onClick={props.dispatch(actionIncreaseStep)}></button>