import { X, O } from '../store/store';

const PLAYER_X = "PLAYER_X";
const PLAYER_O = "PLAYER_O";

// Action creators for ChoiceQuestion component
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