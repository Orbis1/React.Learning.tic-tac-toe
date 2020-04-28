const CLICK_CELL = 'CLICK_CELL';

export const clickCell = (number) => {
    console.log(`>>> action CLICK_CELL on cell#${number}`);
    return {
        type: CLICK_CELL,
        payload: {
            number: number,
        }
    }
};