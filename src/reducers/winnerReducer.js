import { initialState } from '../store/store';
import { COMPUTER_WINS, PLAYER_WINS, DRAW } from '../actions/winnerActions';
import { RESET } from '../actions/resetActions';

const winnerReducer = (state = initialState, action) => {
    if(action.type === COMPUTER_WINS){
        return {
            winner: 'Computer'
        }
    } else if(action.type === PLAYER_WINS){
        return {
            winner: 'Player'
        }
    } else if(action.type === DRAW){
        return {
            winner: 'Draw'
        }
    } else if(action.type === RESET){
        return {
            winner: initialState.endgame.winner
        }
    } else {
        return state;
    }
}

export default winnerReducer;