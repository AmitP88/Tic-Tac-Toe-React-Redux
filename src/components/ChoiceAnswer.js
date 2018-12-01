import React, { Component } from 'react';
import { store } from '../store/store';
import { connect } from 'react-redux';

export class ChoiceAnswer extends Component {
    render() {  
        if(store.getState().renderReducer.ChoiceAnswer === false){
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
        player: state.choiceReducer.player
    };
}

export default connect(mapStateToProps)(ChoiceAnswer);