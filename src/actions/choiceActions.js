import { X, O } from '../store/store';

export const PLAYER_X = "PLAYER_X";
export const PLAYER_O = "PLAYER_O";

// Action creators for choiceReducer
export const choosePlayerX = () => {
    return {
        type: PLAYER_X,
        payload: {
            player: X,
            computer: O
        }
    }
};

export const choosePlayerO = () => {
    return {
        type: PLAYER_O,
        payload: {
            player: O,
            computer: X
        }
    }
};