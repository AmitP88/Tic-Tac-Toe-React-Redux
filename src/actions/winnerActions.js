export const COMPUTER_WINS = 'COMPUTER_WINS';
export const PLAYER_WINS = 'PLAYER_WINS';
export const DRAW = 'DRAW';

export const computerWins = () => {
    return {
        type: COMPUTER_WINS
    }
};

export const playerWins = () => {
    return {
        type: PLAYER_WINS
    }
};

export const draw = () => {
    return {
        type: DRAW
    }
};