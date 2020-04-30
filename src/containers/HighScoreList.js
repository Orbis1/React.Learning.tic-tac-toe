import React from 'react'
import { addHighScore } from '../actions/index'
import { connect } from 'react-redux'

function HighScoreList (props) {
  const {score} = props;

  if (typeof score === "undefined") {
    return (
      <div className="item-c">
          <h2>High Scores:</h2>               
      </div>
    );
  } else {
    const scoreList = score.map((winner, step) => {
      return (
            <li> Winner:{winner} on step#{step}; </li>
      );
    });
    return (
      <div className="item-c">
          <h2>High Scores:</h2>               
          <ol>{scoreList}</ol>
      </div>
    );

  };
};

const mapStateToProps = (state) => {
  console.log(`state.highScore.score ${state.highScore.score}`);
  return {
    score: state.highScore.score,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addHighScore: (winner) => dispatch(addHighScore(winner)),
  }
}

HighScoreList = connect(
  mapStateToProps,
  mapDispatchToProps
)(HighScoreList)

export default HighScoreList;
