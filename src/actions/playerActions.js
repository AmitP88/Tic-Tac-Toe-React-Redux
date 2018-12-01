export const PLAYER_CHOOSES_CELL_1 = "PLAYER_CHOOSES_CELL_1";
export const PLAYER_CHOOSES_CELL_2 = "PLAYER_CHOOSES_CELL_2";
export const PLAYER_CHOOSES_CELL_3 = "PLAYER_CHOOSES_CELL_3";

export const PLAYER_CHOOSES_CELL_4 = "PLAYER_CHOOSES_CELL_4";
export const PLAYER_CHOOSES_CELL_5 = "PLAYER_CHOOSES_CELL_5";
export const PLAYER_CHOOSES_CELL_6 = "PLAYER_CHOOSES_CELL_6";

export const PLAYER_CHOOSES_CELL_7 = "PLAYER_CHOOSES_CELL_7";
export const PLAYER_CHOOSES_CELL_8 = "PLAYER_CHOOSES_CELL_8";
export const PLAYER_CHOOSES_CELL_9 = "PLAYER_CHOOSES_CELL_9";

/* Action creators for when the player chooses a cell to fill */
export const playerChoosesCell1 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: PLAYER_CHOOSES_CELL_1,
            index: 0,
            player: currentState.choiceReducer.player
        });
    }
}

export const playerChoosesCell2 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: PLAYER_CHOOSES_CELL_2,
            index: 1,
            player: currentState.choiceReducer.player
        });
    }
}

export const playerChoosesCell3 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: PLAYER_CHOOSES_CELL_3,
            index: 2,
            player: currentState.choiceReducer.player
        });
    }
}

export const playerChoosesCell4 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: PLAYER_CHOOSES_CELL_4,
            index: 3,
            player: currentState.choiceReducer.player
        });
    }
}

export const playerChoosesCell5 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: PLAYER_CHOOSES_CELL_5,
            index: 4,
            player: currentState.choiceReducer.player
        });
    }
}

export const playerChoosesCell6 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: PLAYER_CHOOSES_CELL_6,
            index: 5,
            player: currentState.choiceReducer.player
        });
    }
}

export const playerChoosesCell7 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: PLAYER_CHOOSES_CELL_7,
            index: 6,
            player: currentState.choiceReducer.player
        });
    }
}

export const playerChoosesCell8 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: PLAYER_CHOOSES_CELL_8,
            index: 7,
            player: currentState.choiceReducer.player
        });
    }
}

export const playerChoosesCell9 = () => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: PLAYER_CHOOSES_CELL_9,
            index: 8,
            player: currentState.choiceReducer.player
        });
    }
}