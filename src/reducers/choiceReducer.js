import { initialState, X, O } from '../store/store';
import { PLAYER_X, PLAYER_O } from '../actions/choiceActions';

const choiceReducer = (state = initialState, action) => {
    if(action.type === PLAYER_X){
        return {
            choices: {
                player: X,
                computer: O
            }
        };

    } else if(action.type === PLAYER_O){
        return {
            choices: {
                player: O,
                computer: X
            }
        };
    } else {
        return state;        
    }
}

export default choiceReducer;