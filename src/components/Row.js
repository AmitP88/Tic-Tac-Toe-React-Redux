import React, { Component } from 'react';
import Cell from './Cell';

class Row extends Component {
    render() {
        return (
            <div className="row">
                <Cell></Cell>
                <Cell></Cell>
                <Cell></Cell>
            </div>
        );        
    }
}

export default Row;