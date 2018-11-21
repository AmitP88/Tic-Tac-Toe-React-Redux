import { X, O } from '../store/store';

const PLAYER_TURN = "PLAYER_TURN";
const COMPUTER_TURN = "COMPUTER_TURN";

// Action creators for boardReducer
export const playersTurn = () => {
    return {
        type: PLAYER_TURN
    }
}

export const computersTurn = () => {
    return {
        type: COMPUTER_TURN
    }
}

