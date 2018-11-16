import React, { Component } from 'react';
import Board from './Board';
import './App.css';
import ChoiceQuestion from './ChoiceQuestion';
import ChoiceAnswer from './ChoiceAnswer';
import Winner from './Winner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <ChoiceQuestion />
        <ChoiceAnswer />
        <Board />
        <Winner />
      </div>
    );
  }
}

export default App;
