import { put, all, select, take } from 'redux-saga/effects'

//selectors
const getGameOver = state => state.gamePlay.present.gameOver;
const getWinner = state => state.gamePlay.present.xIsNext;
const getMove = state => state.gamePlay.present.stepNumber;
    

function* watchAndLog() {
    while (true) {
        const gameOverPrevious = yield select(getGameOver);
        yield take('CLICK_CELL')
        const gameOver = yield select(getGameOver);
    
        if (gameOver === true && gameOverPrevious === false) {
            let winner = yield select(getWinner);
            winner = winner ? "O" : "X";
            const move = yield select(getMove);
            yield put({type: 'SOMEONE_WON', winner: winner, move: move});
        };
    }
}

export default function* rootSaga() {
    yield all([
        watchAndLog(),
    ])
}
