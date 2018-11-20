import React ,{ Component } from 'react';
import { createStore } from 'redux';

const X = ' X ';
const O = ' O ';

const initialState = {
    player: '',
    computer: ''
}

// Step 2: Reducer - state n action
const reducer = (state = initialState, action) => {
    if(action.type === "PLAYER_X"){
        return action.payload;
    }

    if(action.type === "PLAYER_O"){
        return action.payload;
    }            

    return state;
}

// Step 1: Store - reducer n state
export const store = createStore(reducer, initialState);

// Step 3: Subscribe
store.subscribe(() => {
    console.log("Store is now", store.getState());
});


export default class ChoiceQuestion extends Component {
    constructor(props){
        super(props);
        this.handleChoice = this.handleChoice.bind(this);
    }

    handleChoice(e) {
        if(e.target.id === "X"){
            // Step 4: Dispatch action
            store.dispatch({
                type: "PLAYER_X",
                payload: {
                    player: X,
                    computer: O
                }
            });
        } else if(e.target.id === "O"){
            // Step 4: Dispatch action
            store.dispatch({
                type: "PLAYER_O",
                payload: {
                    player: O,
                    computer: X
                }
            });
        }
    }

    render() {
        return (
            <div className="choice-container">
                <h3 className="choice-question">
                    Play as 
                    <span id="X" onClick={this.handleChoice}>X</span>
                    or
                    <span id="O" onClick={this.handleChoice}>O</span>
                    ?
                </h3>                
            </div>
        );        
    }
}