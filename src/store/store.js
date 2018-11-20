import { createStore } from 'redux';
import choiceReducer from '../reducers/choiceReducer';

export const X = 'X';
export const O = 'O';

export const initialState = {
    player: '',
    computer: ''
}

export const store = createStore(choiceReducer, initialState);

store.subscribe(() => {
    console.log("Store is now", store.getState());
});

export default store;