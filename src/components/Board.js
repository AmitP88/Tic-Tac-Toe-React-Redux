import React, { Component } from 'react';
import { store } from '../store/store';
import { playerChoosesCell1, playerChoosesCell2, playerChoosesCell3, playerChoosesCell4, playerChoosesCell5, playerChoosesCell6, playerChoosesCell7, playerChoosesCell8, playerChoosesCell9 } from '../actions/playerActions';

class Board extends Component {
    constructor(props) {
        super(props);

        this.handleCellClick = this.handleCellClick.bind(this);
    }

    handleCellClick(e) {
        e.preventDefault();
        if(e.target.innerHTML === ''){
            switch(e.target.id){
                case "cell-1":
                    store.dispatch(playerChoosesCell1);
                    break;
                case "cell-2":
                    store.dispatch(playerChoosesCell2);
                    break;
                case "cell-3":
                    store.dispatch(playerChoosesCell3);
                    break;
                case "cell-4":
                    store.dispatch(playerChoosesCell4);
                    break;
                case "cell-5":
                    store.dispatch(playerChoosesCell5);
                    break;
                case "cell-6":
                    store.dispatch(playerChoosesCell6);
                    break;
                case "cell-7":
                    store.dispatch(playerChoosesCell7);
                    break;
                case "cell-8":
                    store.dispatch(playerChoosesCell8);
                    break;
                case "cell-9":
                    store.dispatch(playerChoosesCell9);
                    break;
                default:
                    console.log('click a cell');
                    break;
            }                    
        }
    }

    render() {
        return (
            <div className="board-container">              
                <div className="row">
                    <div className="cell" id="cell-1" onClick={this.handleCellClick}></div>
                    <div className="cell" id="cell-2" onClick={this.handleCellClick}></div>
                    <div className="cell" id="cell-3" onClick={this.handleCellClick}></div>
                </div>
                <div className="row">
                    <div className="cell" id="cell-4" onClick={this.handleCellClick}></div>
                    <div className="cell" id="cell-5" onClick={this.handleCellClick}></div>
                    <div className="cell" id="cell-6" onClick={this.handleCellClick}></div>
                </div>
                <div className="row">
                    <div className="cell" id="cell-7" onClick={this.handleCellClick}></div>
                    <div className="cell" id="cell-8" onClick={this.handleCellClick}></div>
                    <div className="cell" id="cell-9" onClick={this.handleCellClick}></div>
                </div>
            </div>
        );
    }
}

export default Board;