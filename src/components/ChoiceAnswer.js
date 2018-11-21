import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../store/store';

export class ChoiceAnswer extends Component {
    render() {
        console.log(this.props.player);        
        return (
            <h3 className="choice-statement">You are {this.props.player}</h3>
        );        
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        player: state.player
    };
}

export default connect(mapStateToProps)(ChoiceAnswer);