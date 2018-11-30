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

import { computerChoosesCell1,
         computerChoosesCell2, 
         computerChoosesCell3, 
         computerChoosesCell4, 
         computerChoosesCell5, 
         computerChoosesCell6, 
         computerChoosesCell7, 
         computerChoosesCell8, 
         computerChoosesCell9 } from '../actions/computerActions';

import { computerWins, 
         playerWins,
         draw } from '../actions/winnerActions';

const winning = (board, player) => {
    if (
        (board[0] === player && board[1] === player && board[2] === player) ||
        (board[3] === player && board[4] === player && board[5] === player) ||
        (board[6] === player && board[7] === player && board[8] === player) ||
        (board[0] === player && board[3] === player && board[6] === player) ||
        (board[1] === player && board[4] === player && board[7] === player) ||
        (board[2] === player && board[5] === player && board[8] === player) ||
        (board[0] === player && board[4] === player && board[8] === player) ||
        (board[2] === player && board[4] === player && board[6] === player)
    ) {
        return true;
    } else {
        return false;
    }
}

// available cells on the board
const availableCells = (board) => board.filter(cell => cell !== 'X' && cell !== 'O');

export class Board extends Component {
    constructor(props) {
        super(props);
        this.determineWinner = this.determineWinner.bind(this);
        this.handleCellClick = this.handleCellClick.bind(this);
        this.computersTurn = this.computersTurn.bind(this);
    }

    determineWinner() {
        const humanPlayer = store.getState().choiceReducer.player;
        const aiPlayer = store.getState().choiceReducer.computer;
        let currentBoard = store.getState().boardReducer.board;

        // available cells
        let availSpots = availableCells(currentBoard);

        // checks for the terminal states such as win, lose, and tie and returning a value accordingly
        if (winning(currentBoard, humanPlayer)){
            store.dispatch(playerWins());
        } else if (winning(currentBoard, aiPlayer)){
            store.dispatch(computerWins());
        } else if ((winning(currentBoard, humanPlayer) === false) && (winning(currentBoard, aiPlayer) === false) && (availSpots.length === 0)){
            store.dispatch(draw());
        }
    }

    computersTurn() {
        const humanPlayer = store.getState().choiceReducer.player;
        const aiPlayer = store.getState().choiceReducer.computer;
        let currentBoard = store.getState().boardReducer.board;

        // modify currentBoard by replacing any '' values with their index
        let indexBoard = currentBoard.map((cell, index) => cell || index);

        const minimax = (newBoard, player) => {
            // available cells
            let availSpots = availableCells(newBoard);

            // checks for the terminal states such as win, lose, and tie and returning a value accordingly
            if (winning(newBoard, humanPlayer)){
                return {score: -10};
            } else if (winning(newBoard, aiPlayer)){
                return {score: 10};
            } else if (availSpots.length === 0){
                return {score: 0}
            }

            // an array to collect all the move objects
            let moves = [];

            // loop through available spots
            for (let i = 0; i < availSpots.length; i++) {
                //create an object for each and store the index of that spot
                let move = {};
                    move.index = newBoard[availSpots[i]];

                // set the empty spot to the current player
                newBoard[availSpots[i]] = player;

                /*collect the score resulted from calling minimax 
                    on the opponent of the current player*/
                if (player === aiPlayer) {
                    let result = minimax(newBoard, humanPlayer);
                    move.score = result.score;
                } else {
                    let result = minimax(newBoard, aiPlayer);
                    move.score = result.score;
                }

                // reset the spot to empty
                newBoard[availSpots[i]] = move.index;

                // push the object to the array
                moves.push(move);
            }

            // if it is the computer's turn loop over the moves and choose the move with the highest score            
            let bestMove;
            if (player === aiPlayer){
                let bestScore = -10000;
                for (let i = 0; i < moves.length; i++){
                    if (moves[i].score > bestScore){
                        bestScore = moves[i].score;
                        bestMove = i;
                    }
                }
            } else {
                // else loop over the moves and choose the move with the lowest score
                let bestScore = 10000;
                for (let i = 0; i < moves.length; i++){
                    if (moves[i].score < bestScore){
                        bestScore = moves[i].score;
                        bestMove = i;                        
                    }
                }
            }

            // return the chosen move (object) from the moves array
            return moves[bestMove];
        }

        // finding the ultimate play on the game that favors the computer
        var bestSpot = minimax(indexBoard, aiPlayer);

        console.log(currentBoard);

        switch(bestSpot.index){
            case 0:
                console.log("index: " + bestSpot.index);
                store.dispatch(computerChoosesCell1());
                this.determineWinner();                
                break;
            case 1:
                console.log("index: " + bestSpot.index);
                store.dispatch(computerChoosesCell2());
                this.determineWinner();                
                break;
            case 2:
                console.log("index: " + bestSpot.index);
                store.dispatch(computerChoosesCell3());
                this.determineWinner();                
                break;
            case 3:
                console.log("index: " + bestSpot.index);
                store.dispatch(computerChoosesCell4());
                this.determineWinner();               
                break;
            case 4:
                console.log("index: " + bestSpot.index);
                store.dispatch(computerChoosesCell5());
                this.determineWinner();                
                break;
            case 5:
                console.log("index: " + bestSpot.index);
                store.dispatch(computerChoosesCell6());
                this.determineWinner();                
                break;
            case 6:
                console.log("index: " + bestSpot.index);
                store.dispatch(computerChoosesCell7());
                this.determineWinner();                
                break;
            case 7:
                console.log("index: " + bestSpot.index);
                store.dispatch(computerChoosesCell8());
                this.determineWinner();                
                break;
            case 8:
                console.log("index: " + bestSpot.index);
                store.dispatch(computerChoosesCell9());
                this.determineWinner();                
                break;
            default:
                console.log('no bestSpot left!');
                break;
        }
    }

    handleCellClick(e) {
        e.preventDefault();
        if(e.target.innerHTML === ''){
            switch(e.target.id){
                case "cell-1":
                    store.dispatch(playerChoosesCell1());
                    this.determineWinner();                    
                    this.computersTurn();
                    break;
                case "cell-2":
                    store.dispatch(playerChoosesCell2());
                    this.determineWinner();                    
                    this.computersTurn();
                    break;
                case "cell-3":
                    store.dispatch(playerChoosesCell3());
                    this.determineWinner();                    
                    this.computersTurn();
                    break;
                case "cell-4":
                    store.dispatch(playerChoosesCell4());
                    this.determineWinner();                    
                    this.computersTurn();
                    break;
                case "cell-5":
                    store.dispatch(playerChoosesCell5());
                    this.determineWinner();                    
                    this.computersTurn();
                    break;
                case "cell-6":
                    store.dispatch(playerChoosesCell6());
                    this.determineWinner();                    
                    this.computersTurn();
                    break;
                case "cell-7":
                    store.dispatch(playerChoosesCell7());
                    this.determineWinner();                    
                    this.computersTurn();
                    break;
                case "cell-8":
                    store.dispatch(playerChoosesCell8());
                    this.determineWinner();                    
                    this.computersTurn();
                    break;
                case "cell-9":
                    store.dispatch(playerChoosesCell9());
                    this.determineWinner();                    
                    this.computersTurn();
                    break;
                default:
                    console.log('click a cell');
                    break;
            }                    
        }
    }

    render() {
        if(this.props.player) {
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
        } else {
            return null;
        }

    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        board: state.boardReducer.board,
        player: state.choiceReducer.player
    };
}

export default connect(mapStateToProps)(Board);