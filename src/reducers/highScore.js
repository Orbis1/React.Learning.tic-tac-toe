const initialState =  {
    scores: [],
};

const highScore = (state = initialState, action) => {
    switch (action.type) {
        case 'SOMEONE_WON':
            // Winner:O on step#
            const {winner, move} = action;
            const scores = {
                winner: winner,
                move: move,
            };

            return {
                scores: state.scores.concat(scores), // state.highScore?
            };
        default:
            return state;
    }
}

export default highScore;