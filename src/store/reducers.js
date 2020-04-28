const initialState = {
    history: [{
        squares: Array(9).fill(null), 
      }],
    stepNumber: 0,
    xIsNext: true,
    status: "Next player: X",
    gameOver: false,
};

export const rootReducer = (state = initialState, action) => {

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    switch (action.type) {
        case 'CLICK_CELL':
            const { number } = action.payload;
            let stepNumber = state.stepNumber;
            const history = state.history.slice(0, stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            const xIsNext = state.xIsNext;
            let status = '';
            let gameOver;

            if (calculateWinner(squares) || squares[number]) {
                return state;
              }

            squares[number] = xIsNext ? "X" : "O";

            const winner = calculateWinner(squares);

            if (winner) {
                status = "Winner: " + winner;
                gameOver = true;
              } else {
                status = "Next player: " + (xIsNext ? "O" : "X");
                gameOver = false;
              }

            stepNumber++

            return {
                ...state,
                history: history.concat([
                    {
                      squares: squares
                    }
                  ]),
                stepNumber: stepNumber,
                xIsNext: !xIsNext,
                status: status,
                gameOver: gameOver,
            };
    }

    return state;
};