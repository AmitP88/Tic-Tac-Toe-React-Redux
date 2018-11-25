import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../store/store';
import { playerChoosesCell1,
         playerChoosesCell2, 
         playerChoosesCell3, 
         playerChoosesCell4, 
         playerChoosesCell5, 
         playerChoosesCell6, 
         playerChoosesCell7, 
         playerChoosesCell8, 
         playerChoosesCell9 } from '../actions/playerActions';

export class Board extends Component {
    constructor(props) {
        super(props);

        this.getAvailableCells = this.getAvailableCells.bind(this);
        this.winningCombos = this.winningCombos.bind(this);
        this.handleCellClick = this.handleCellClick.bind(this);
    }

    getAvailableCells(currentBoard = store.getState().playersMoveReducer.board) {
        console.log('currentBoardState : ', currentBoard);

        let availableCells = currentBoard.filter((cell) => {
            return cell === '';
        });

        console.log('availableCells : ', availableCells);
    }

    winningCombos(currentBoard = store.getState().playersMoveReducer.board, player = store.getState().choiceReducer.player){
        console.log('currentBoardState : ', currentBoard);

        if(
            (currentBoard[0] === player && currentBoard[1] === player && currentBoard[2] === player) ||
            (currentBoard[3] === player && currentBoard[4] === player && currentBoard[5] === player) ||
            (currentBoard[6] === player && currentBoard[7] === player && currentBoard[8] === player) ||
            (currentBoard[0] === player && currentBoard[3] === player && currentBoard[6] === player) ||
            (currentBoard[1] === player && currentBoard[4] === player && currentBoard[7] === player) ||
            (currentBoard[2] === player && currentBoard[5] === player && currentBoard[8] === player) ||
            (currentBoard[0] === player && currentBoard[4] === player && currentBoard[8] === player) ||
            (currentBoard[2] === player && currentBoard[4] === player && currentBoard[6] === player)
        ){
            return console.log('winner? : ', true);
        } else {
            return console.log('winner? : ', false);
        }
    }

    handleCellClick(e) {
        e.preventDefault();
        if(e.target.innerHTML === ''){
            switch(e.target.id){
                case "cell-1":
                    store.dispatch(playerChoosesCell1());
                    this.getAvailableCells();
                    this.winningCombos();
                    break;
                case "cell-2":
                    store.dispatch(playerChoosesCell2());
                    this.getAvailableCells();
                    this.winningCombos();
                    break;
                case "cell-3":
                    store.dispatch(playerChoosesCell3());
                    this.getAvailableCells();
                    this.winningCombos();
                    break;
                case "cell-4":
                    store.dispatch(playerChoosesCell4());
                    this.getAvailableCells();
                    this.winningCombos();
                    break;
                case "cell-5":
                    store.dispatch(playerChoosesCell5());
                    this.getAvailableCells();
                    this.winningCombos();
                    break;
                case "cell-6":
                    store.dispatch(playerChoosesCell6());
                    this.getAvailableCells();
                    this.winningCombos();
                    break;
                case "cell-7":
                    store.dispatch(playerChoosesCell7());
                    this.getAvailableCells();
                    this.winningCombos();
                    break;
                case "cell-8":
                    store.dispatch(playerChoosesCell8());
                    this.getAvailableCells();
                    this.winningCombos();
                    break;
                case "cell-9":
                    store.dispatch(playerChoosesCell9());
                    this.getAvailableCells();
                    this.winningCombos();
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
                    <div className="cell" id="cell-1" onClick={this.handleCellClick}>{this.props.board[0]}</div>
                    <div className="cell" id="cell-2" onClick={this.handleCellClick}>{this.props.board[1]}</div>
                    <div className="cell" id="cell-3" onClick={this.handleCellClick}>{this.props.board[2]}</div>
                </div>
                <div className="row">
                    <div className="cell" id="cell-4" onClick={this.handleCellClick}>{this.props.board[3]}</div>
                    <div className="cell" id="cell-5" onClick={this.handleCellClick}>{this.props.board[4]}</div>
                    <div className="cell" id="cell-6" onClick={this.handleCellClick}>{this.props.board[5]}</div>
                </div>
                <div className="row">
                    <div className="cell" id="cell-7" onClick={this.handleCellClick}>{this.props.board[6]}</div>
                    <div className="cell" id="cell-8" onClick={this.handleCellClick}>{this.props.board[7]}</div>
                    <div className="cell" id="cell-9" onClick={this.handleCellClick}>{this.props.board[8]}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        board: state.playersMoveReducer.board
    };
}

export default connect(mapStateToProps)(Board);