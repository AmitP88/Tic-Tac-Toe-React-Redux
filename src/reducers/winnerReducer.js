import { initialState } from '../store/store';
import { COMPUTER_WINS, PLAYER_WINS, DRAW } from '../actions/winnerActions';
import { RESET } from '../actions/resetActions';

const winnerReducer = (state = initialState, action) => {
    if(action.type === COMPUTER_WINS){
        return {
            winner: 'Lose'
        }
    } else if(action.type === PLAYER_WINS){
        return {
            winner: 'Win'
        }
    } else if(action.type === DRAW){
        return {
            winner: 'Tied'
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