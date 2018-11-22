import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ChoiceAnswer extends Component {
    render() {
        console.log(this.props.choices.player);        
        return (
            <h3 className="choice-statement">You are {this.props.choices.player}</h3>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        choices: {
            player: state.choices.player
        }
    };
}

export default connect(mapStateToProps)(ChoiceAnswer);