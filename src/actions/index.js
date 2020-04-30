const CLICK_CELL = 'CLICK_CELL';

export const clickCell = (number) => {
    return {
        type: CLICK_CELL,
        number,
    }
};

const SOMEONE_WON = 'SOMEONE_WON';

export const addHighScore = (winner, move) => {
    return {
        type: SOMEONE_WON,
        winner, 
        move,
    }
};