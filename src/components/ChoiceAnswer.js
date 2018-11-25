import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ChoiceAnswer extends Component {
    render() {   
        return (
            <h3 className="choice-statement">You are {this.props.player}</h3>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        player: state.choiceReducer.player
    };
}

export default connect(mapStateToProps)(ChoiceAnswer);