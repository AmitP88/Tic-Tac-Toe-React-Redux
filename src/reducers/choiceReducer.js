import { initialState, X, O } from '../store/store';
import { PLAYER_X, PLAYER_O } from '../actions/choiceActions';
import { RESET } from '../actions/resetActions';

const choiceReducer = (state = initialState, action) => {   
    if(action.type === PLAYER_X){
        return {
            player: X,
            computer: O
        };
    } else if(action.type === PLAYER_O){
        return {
            player: O,
            computer: X
        };
    } else if(action.type === RESET){
        return {
            player: initialState.choices.player,
            computer: initialState.choices.computer
        }    
    } else {
        return state;
    }
}

export default choiceReducer;