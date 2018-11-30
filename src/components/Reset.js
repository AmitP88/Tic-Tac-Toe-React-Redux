import React, { Component } from 'react';
import { store } from '../store/store';
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
        return (
            <button className="resetButton" onClick={this.handleReset}>Reset</button>
        );        
    }

}

export default Reset;