import React, { Component } from 'react';

class Board extends Component {
    render() {
        return (
            <div className="board-container">              
                <div className="row">
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                </div>
                <div className="row">
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                </div>
                <div className="row">
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                </div>
            </div>
        );
    }
}

export default Board;