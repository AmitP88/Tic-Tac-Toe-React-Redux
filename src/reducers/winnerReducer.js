import { initialState } from '../store/store';
import { COMPUTER_WINS, PLAYER_WINS, DRAW } from '../actions/winnerActions';

const winnerReducer = (state = initialState, action) => {
    switch(action.type){
        case COMPUTER_WINS:
            return {
                winner: 'Computer'
            };
        case PLAYER_WINS:
            return {
                winner: 'You'
            };
        case DRAW:
            return {
                winner: 'Draw'
            };
        default:
            return state;
    }
}

export default winnerReducer;