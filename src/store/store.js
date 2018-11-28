import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import choiceReducer from '../reducers/choiceReducer';
import boardReducer from '../reducers/boardReducer';

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

export const store = createStore(
    combineReducers({
        choiceReducer,
        boardReducer
    }),
    applyMiddleware(thunk)
);

store.subscribe(() => store.getState());

export default store;