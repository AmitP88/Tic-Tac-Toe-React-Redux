import React, { Component } from 'react';
import react from '../react.svg';
import redux from '../redux.svg';
import Tooltip from "react-simple-tooltip";

class Footer extends Component {
    render() {
      return (
        <footer>
          <p className="builtWith">
            Built with <Tooltip content="React"><img src={react} className="App-logo" alt="logo" /></Tooltip>+<Tooltip content="Redux"><img src={redux} className="App-logo" alt="logo" /></Tooltip>
          </p>
            
            <a href="https://github.com/AmitP88/Tic-Tac-Toe-React-Redux" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github fa-4x"></i>
            </a>      
            <p>Developed by <a href="https://github.com/AmitP88" target="_blank" rel="noopener noreferrer" className="github-profile-link">Amit Patel</a></p>      
        </footer>
      );
    }
}

export default Footer;