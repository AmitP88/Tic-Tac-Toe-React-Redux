import React, { Component } from 'react';

const X = ' X ';
const O = ' O ';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [
                [X,O,X],
                [O,X,O],
                [X,O,X]
            ]
        }
    }

    render() {
        return (
            <div className="board-container">
                <div className="row">
                    <div className="cell">{this.state.board[0][0]}</div>
                    <div className="cell">{this.state.board[0][1]}</div>
                    <div className="cell">{this.state.board[0][2]}</div>
                </div>
                <div className="row">
                    <div className="cell">{this.state.board[1][0]}</div>
                    <div className="cell">{this.state.board[1][1]}</div>
                    <div className="cell">{this.state.board[1][2]}</div>
                </div>
                <div className="row">
                    <div className="cell">{this.state.board[2][0]}</div>
                    <div className="cell">{this.state.board[2][1]}</div>
                    <div className="cell">{this.state.board[2][2]}</div>
                </div>
            </div>
        );
    }

}

export default Board;