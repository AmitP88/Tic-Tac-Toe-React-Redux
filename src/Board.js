import React, { Component } from 'react';

        const X = ' X ';
        const O = ' O ';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [
                ['','',''],
                ['','',''],
                ['','','']
            ]
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        if(event.target.innerHTML === ''){
            event.target.innerHTML = X;
        }

        console.log(event.target.innerHTML);
    }

    render() {
        return (
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
        );
    }

}

export default Board;