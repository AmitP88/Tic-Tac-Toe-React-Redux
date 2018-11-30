import React ,{ Component } from 'react';
import { choosePlayerX, choosePlayerO } from '../actions/choiceActions';
import { store, X, O } from '../store/store';

class ChoiceQuestion extends Component {
    constructor(props){
        super(props);
        this.state = {
            render: true
        }
        this.unmountSelf = this.unmountSelf.bind(this);
        this.handleChoice = this.handleChoice.bind(this);
    }

    unmountSelf(){
        this.setState({
            render: false
        });
    }

    handleChoice(e) {
        if(e.target.id === X){
            store.dispatch(choosePlayerX());
            this.unmountSelf();
        } else if(e.target.id === O){
            store.dispatch(choosePlayerO());
            this.unmountSelf();
        }
    }

    render() {
        if(this.state.render === false) {
            return null;
        } else {
            return (
                <div className="choice-container">
                    <h3 className="choice-question">
                        Play as 
                        <button id={X} onClick={this.handleChoice}>X</button>
                        or
                        <button id={O} onClick={this.handleChoice}>O</button>
                        ?
                    </h3>                
                </div>
            );             
        }
    }
}

export default ChoiceQuestion;