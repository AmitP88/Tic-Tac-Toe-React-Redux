export const PLAYER_X = "PLAYER_X";
export const PLAYER_O = "PLAYER_O";

// Action creators for choiceReducer
export const choosePlayerX = () => {
    return {
        type: PLAYER_X
    }
};

export const choosePlayerO = () => {
    return {
        type: PLAYER_O
    }
};