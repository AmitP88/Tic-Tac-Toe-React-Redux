import React, { Component } from 'react';
import Row from './Row';


class Board extends Component {
    render() {
        return (
            <div className="board-container">              
                <Row></Row>
                <Row></Row>
                <Row></Row>
            </div>
        );        
    }
}

export default Board;