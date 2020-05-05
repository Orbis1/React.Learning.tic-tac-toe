import React from 'react'
import { connect } from 'react-redux'

let HighScoreList = ({ scores }) => {

  function compare( a, b ) {
    if ( a.move < b.move ){
      return -1;
    }
    if ( a.move > b.move ){
      return 1;
    }
    return 0;
  }

  //const arrayScores = Array.from(scores);
  // console.log('HighScoreList.js -> arrayScores; ');
  // console.log(arrayScores);
  //scores.sort(compare);

  // let uniqScores = scores.filter((a, b) => {
  //   if (a.move == b.move && a.winner == b.winner) {
  //     return 0;
  //   } else {
  //     return 1;
  //   }
  // });


  // console.log(`Scores`);
  // console.log(scores);

  //let uniqScores = [];

  // if (scores.length == 1) {
  //   uniqScores = scores;
  // } else {
  //   for (let i = 0; i < scores.length - 1 ; i++) {
  //     console.log(`i = ${i} scores[i] = (${Object.entries(scores[i])})`);

  //     if (scores[i].move === scores[i+1].move && scores[i].winner === scores[i+1].winner) {
  //       console.log(`${scores[i]} and  ${scores[i-1]} are equl`);
  //     } else {
  //       uniqScores.push(scores[i]);
  //       //uniqScores.push({winner: scores[i].winner, move: scores[i].move});
  //       //uniqScores.concat(scores[i]);
  //       console.log(`add to array uniqScores ${Object.entries(scores[i])}`);
  //       console.log(scores[i]);
  //     }
  //   }
  // }


  const uniqScores = scores.filter((score, index, self) => 
    index === self.findIndex((t) => (
      t.winner === score.winner && t.move === score.move
    ))
  ).sort((a,b) => a.move-b.move)



  



    


  // console.log(`uniqScores`);
  // console.log(uniqScores);

  // let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
  // x(names); // 'John', 'Paul', 'George', 'Ringo'

  // for (let i = scores.length-1; i > 0; i--) {
  //   if (scores[i] == scores[i-1]) {
  //     scores.splice(i, 1);
  //   }
  //   console.log(`${scores[i]} == ${scores[i-1]} = ${scores[i] == scores[i-1]}`);
  // }


  const list = uniqScores.map(({winner, move}, index) => <li key = {winner, move, index}> The Player {winner} won in {move} moves </li>);

  return (
    <ol> {list} </ol>
  );
}

const mapStateToProps = (state) => {
  return {
    scores: state.highScore.scores,
  }
}

HighScoreList = connect(
  mapStateToProps
)(HighScoreList)

export default HighScoreList;
