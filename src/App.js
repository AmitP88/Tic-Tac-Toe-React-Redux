import React, { Component } from 'react';

import './App.css';
import ChoiceQuestion from './components/ChoiceQuestion';
import ChoiceAnswer from './components/ChoiceAnswer';
import Winner from './components/Winner';
import Board from './components/Board';


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
