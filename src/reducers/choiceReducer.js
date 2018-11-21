import initialState from '../store/store';
import { PLAYER_X, PLAYER_O } from '../actions/choiceActions';

const choiceReducer = (state = initialState, action) => {
    if(action.type === PLAYER_X){
        return action.payload;
    }

    if(action.type === PLAYER_O){
        return action.payload;
    }

    return state;
}

export default choiceReducer;