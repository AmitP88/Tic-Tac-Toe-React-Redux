import React, { Component } from 'react';
import './App.css';
import './media_queries.css';
import ChoiceQuestion from './components/ChoiceQuestion';
import ChoiceAnswer from './components/ChoiceAnswer';
import Winner from './components/Winner';
import Board from './components/Board';
import Footer from './components/Footer';
import store from './store/store';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';



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
            <Footer />
          </div>        
        </Provider>
    );
  }
}

export default App;
