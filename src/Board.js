import React, { Component } from 'react';

const X = ' X ';
const O = ' O ';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: '',
            board: [
                ['','',''],
                ['','',''],
                ['','','']
            ]
        }

        this.handleChoice = this.handleChoice.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleChoice(event) {
        const disableChoice = () => document.getElementById("choice-question").style.display = "none";
        if(event.target.innerHTML === X){
            this.setState({
                choice: X
            });
            disableChoice(); 
        } else if(event.target.innerHTML === O){
            this.setState({
                choice: O
            });
            disableChoice();
        }
    }

    handleOnClick(event) {
        if(event.target.innerHTML === ''){
            event.target.innerHTML = this.state.choice;
        }

        console.log(event.target.innerHTML);
    }

    render() {
        return (
            <div className="container">
                <h3 id="choice-question">
                    Play as 
                    <span onClick={this.handleChoice}>{X}</span>
                    or
                    <span onClick={this.handleChoice}>{O}</span>
                    ?
                </h3>
                <h3>You are : {this.state.choice}</h3>
                <div className="board-container">
                    <div className="row">
                        <div className="cell" id="cell-1" onClick={this.handleOnClick}>{this.state.board[0][0]}</div>
                        <div className="cell" id="cell-2" onClick={this.handleOnClick}>{this.state.board[0][1]}</div>
                        <div className="cell" id="cell-3" onClick={this.handleOnClick}>{this.state.board[0][2]}</div>
                    </div>
                    <div className="row">
                        <div className="cell" id="cell-4" onClick={this.handleOnClick}>{this.state.board[1][0]}</div>
                        <div className="cell" id="cell-5" onClick={this.handleOnClick}>{this.state.board[1][1]}</div>
                        <div className="cell" id="cell-6" onClick={this.handleOnClick}>{this.state.board[1][2]}</div>
                    </div>
                    <div className="row">
                        <div className="cell" id="cell-7" onClick={this.handleOnClick}>{this.state.board[2][0]}</div>
                        <div className="cell" id="cell-8" onClick={this.handleOnClick}>{this.state.board[2][1]}</div>
                        <div className="cell" id="cell-9" onClick={this.handleOnClick}>{this.state.board[2][2]}</div>
                    </div>
                </div>            
            </div>

        );
    }

}

export default Board;