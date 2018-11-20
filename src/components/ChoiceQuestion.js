import React ,{ Component } from 'react';
import { choosePlayerX, choosePlayerO } from '../actions/choiceActions';
import { store, X, O } from '../store/store';

class ChoiceQuestion extends Component {
    constructor(props){
        super(props);
        this.handleChoice = this.handleChoice.bind(this);
    }

    handleChoice(e) {
        if(e.target.id === X){
            store.dispatch(choosePlayerX());
        } else if(e.target.id === O){
            store.dispatch(choosePlayerO());
        }
    }

    render() {
        return (
            <div className="choice-container">
                <h3 className="choice-question">
                    Play as 
                    <span id={X} onClick={this.handleChoice}>X</span>
                    or
                    <span id={O} onClick={this.handleChoice}>O</span>
                    ?
                </h3>                
            </div>
        );        
    }
}

export default ChoiceQuestion;