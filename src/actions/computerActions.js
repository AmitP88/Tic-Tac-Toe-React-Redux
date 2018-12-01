export const COMPUTER_CHOOSES_CELL_1 = "computer_CHOOSES_CELL_1";
export const COMPUTER_CHOOSES_CELL_2 = "computer_CHOOSES_CELL_2";
export const COMPUTER_CHOOSES_CELL_3 = "computer_CHOOSES_CELL_3";

export const COMPUTER_CHOOSES_CELL_4 = "computer_CHOOSES_CELL_4";
export const COMPUTER_CHOOSES_CELL_5 = "computer_CHOOSES_CELL_5";
export const COMPUTER_CHOOSES_CELL_6 = "computer_CHOOSES_CELL_6";

export const COMPUTER_CHOOSES_CELL_7 = "computer_CHOOSES_CELL_7";
export const COMPUTER_CHOOSES_CELL_8 = "computer_CHOOSES_CELL_8";
export const COMPUTER_CHOOSES_CELL_9 = "computer_CHOOSES_CELL_9";

/* Action creators for when the computer chooses a cell to fill */
export const computerChoosesCell1 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: COMPUTER_CHOOSES_CELL_1,
            index: 0,
            computer: currentState.choiceReducer.computer
        });
    }
}

export const computerChoosesCell2 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: COMPUTER_CHOOSES_CELL_2,
            index: 1,
            computer: currentState.choiceReducer.computer
        });
    }
}

export const computerChoosesCell3 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: COMPUTER_CHOOSES_CELL_3,
            index: 2,
            computer: currentState.choiceReducer.computer
        });
    }
}

export const computerChoosesCell4 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: COMPUTER_CHOOSES_CELL_4,
            index: 3,
            computer: currentState.choiceReducer.computer
        });
    }
}

export const computerChoosesCell5 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: COMPUTER_CHOOSES_CELL_5,
            index: 4,
            computer: currentState.choiceReducer.computer
        });
    }
}

export const computerChoosesCell6 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: COMPUTER_CHOOSES_CELL_6,
            index: 5,
            computer: currentState.choiceReducer.computer
        });
    }
}

export const computerChoosesCell7 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: COMPUTER_CHOOSES_CELL_7,
            index: 6,
            computer: currentState.choiceReducer.computer
        });
    }
}

export const computerChoosesCell8 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: COMPUTER_CHOOSES_CELL_8,
            index: 7,
            computer: currentState.choiceReducer.computer
        });
    }
}

export const computerChoosesCell9 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: COMPUTER_CHOOSES_CELL_9,
            index: 8,
            computer: currentState.choiceReducer.computer
        });
    }
}