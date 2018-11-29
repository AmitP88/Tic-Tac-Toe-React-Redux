import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import choiceReducer from '../reducers/choiceReducer';
import boardReducer from '../reducers/boardReducer';
import winnerReducer from '../reducers/winnerReducer';

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
    ],
    endgame: {
        winner: ''
    }
}

export const store = createStore(
    combineReducers({
        choiceReducer,
        boardReducer,
        winnerReducer
    }),
    applyMiddleware(thunk)
);

store.subscribe(() => store.getState());

export default store;