import { createStore, combineReducers } from 'redux';
import choiceReducer from '../reducers/choiceReducer';
import playersMoveReducer from '../reducers/playersMoveReducer';

export const X = 'X';
export const O = 'O';

export const initialState = {
    choices: {
        player: '',
        computer: ''        
    },
    board: [
        '', '', '',
        '', '', '',
        '', '', ''
    ]
}

// export const store = createStore(combineReducers({
//     choices: choiceReducer,
//     board: playersMoveReducer
// }));

export const store = createStore(choiceReducer);

store.subscribe(() => store.getState());

export default store;