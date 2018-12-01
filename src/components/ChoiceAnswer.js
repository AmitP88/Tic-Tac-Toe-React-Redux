import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ChoiceAnswer extends Component {
    render() {
        if(this.props.ChoiceAnswer === false){
            return null;
        } else {
            return (
                <h3 className="choice-statement">You are {this.props.player}</h3>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        player: state.choiceReducer.player,
        ChoiceAnswer: state.renderReducer.ChoiceAnswer
    };
}

export default connect(mapStateToProps)(ChoiceAnswer);