import React, { Component } from 'react';
import { store } from '../store/store';
import { connect } from 'react-redux';
import resetGame from '../actions/resetActions';

class Reset extends Component {
    constructor(props) {
        super(props);
        this.handleReset = this.handleReset.bind(this);
    }
    
    handleReset(e) {
        e.preventDefault();
        store.dispatch(resetGame());
        console.log('Resets the game!');
    }
    render() {
        if(this.props.player){
            return (
                <button className="resetButton" onClick={this.handleReset}>Reset</button>
            );              
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        player: state.choiceReducer.player
    };
}

export default connect(mapStateToProps)(Reset);