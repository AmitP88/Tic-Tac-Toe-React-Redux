import React, { Component } from 'react';

class Board extends Component {
    constructor(props) {
        super(props);

        this.handleCellClick = this.handleCellClick.bind(this);
    }

    handleCellClick(e) {
        e.preventDefault();
        console.log(e.target.id);
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