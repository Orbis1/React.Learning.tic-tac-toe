const CLICK_CELL = 'CLICK_CELL';

export const clickCell = (number) => {
    return {
        type: CLICK_CELL,
        payload: {
            number: number,
        }
    }
};