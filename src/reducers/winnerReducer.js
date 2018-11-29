import { initialState } from '../store/store';
import { COMPUTER_WINS, PLAYER_WINS, DRAW } from '../actions/winnerActions';

const winnerReducer = (state = initialState, action) => {
    if(action.type === COMPUTER_WINS){
        return {
            winner: 'Computer'
        }
    } else if(action.type === PLAYER_WINS){
        return {
            winner: 'You'
        }
    } else if(action.type === DRAW){
        return {
            winner: 'Draw'
        }
    } else {
        return state;
    }
}

export default winnerReducer;