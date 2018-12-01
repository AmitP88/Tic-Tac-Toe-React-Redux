import React ,{ Component } from 'react';
import { choosePlayerX, choosePlayerO } from '../actions/choiceActions';
import { connect } from 'react-redux';
import { store, X, O } from '../store/store';
import { render_choiceAnswerAndBoard } from '../actions/renderActions';

class ChoiceQuestion extends Component {
    constructor(props){
        super(props);
        this.handleChoice = this.handleChoice.bind(this);
    }

    handleChoice(e) {
        if(e.target.id === X){
            store.dispatch(choosePlayerX());
            store.dispatch(render_choiceAnswerAndBoard());
            this.forceUpdate();
        } else if(e.target.id === O){
            store.dispatch(choosePlayerO());
            store.dispatch(render_choiceAnswerAndBoard());
            this.forceUpdate();
        }
    }

    render() {
        console.log(store.getState());
        if(this.props.ChoiceQuestion === false) {
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

// export default ChoiceQuestion;

const mapStateToProps = (state) => {
    return {
        ChoiceQuestion: state.renderReducer.ChoiceQuestion
    }
}

export default connect(mapStateToProps)(ChoiceQuestion);