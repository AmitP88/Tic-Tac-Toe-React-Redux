import React, { Component } from 'react';
import './App.css';
import ChoiceQuestion from './components/ChoiceQuestion';
import ChoiceAnswer from './components/ChoiceAnswer';
import Winner from './components/Winner';
import Board from './components/Board';
import Reset from './components/Reset';

import store from './store/store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <h1>Tic Tac Toe</h1>
            <ChoiceQuestion />
            <ChoiceAnswer />
            <Board />
            <Winner />
          </div>        
        </Provider>
    );
  }
}

export default App;
