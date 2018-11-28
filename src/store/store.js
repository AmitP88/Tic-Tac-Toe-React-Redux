import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import choiceReducer from '../reducers/choiceReducer';
import playersMoveReducer from '../reducers/playersMoveReducer';
import computersMoveReducer from '../reducers/computersMoveReducer';

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
        playersMoveReducer,
        computersMoveReducer
    }),
    applyMiddleware(thunk)
);

// export const store = createStore(choiceReducer);

store.subscribe(() => store.getState());

export default store;