

const CLICK_CELL = 'CLICK_CELL';

let xstep = 0;

export const clickCell = (number) => {
    console.log(`>>> action IncreaseStep ${xstep}`);
    return {
        type: CLICK_CELL,
        payload: {
            stepNumber: ++xstep,
            number: number,
        }
    }
};

