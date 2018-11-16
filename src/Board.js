import React, { Component } from 'react';

const initialState = {
    player: '',
    computer: '',
    board: [
        '','','',
        '','','',
        '','',''
    ]    
}
const X = ' X ';
const O = ' O ';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.handleReset = this.handleReset.bind(this);
        this.handleChoice = this.handleChoice.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleReset() {
        this.setState(initialState, () => console.log(this.state));
    }

    handleChoice(event) {
        if(event.target.innerHTML === X){
            this.setState({
                player: X,
                computer: O
            });
        } else if(event.target.innerHTML === O){
            this.setState({
                player: O,
                computer: X
            });
        }
    }

    handleOnClick(event) {
        if(event.target.innerHTML === ''){
            switch(event.target.id){
                case "cell-1":
                    this.setState({
                        board: [...this.state.board.slice(0,0), this.state.player, ...this.state.board.slice(0 + 1)]
                    }, () => console.log(this.state.board));
                    break;
                case "cell-2":
                    this.setState({
                        board: [...this.state.board.slice(0,1), this.state.player, ...this.state.board.slice(1 + 1)]
                    }, () => console.log(this.state.board));
                    break;
                case "cell-3":
                    this.setState({
                        board: [...this.state.board.slice(0,2), this.state.player, ...this.state.board.slice(2 + 1)]
                    }, () => console.log(this.state.board));
                    break;
                case "cell-4":
                    this.setState({
                        board: [...this.state.board.slice(0,3), this.state.player, ...this.state.board.slice(3 + 1)]
                    }, () => console.log(this.state.board));
                    break;
                case "cell-5":
                    this.setState({
                        board: [...this.state.board.slice(0,4), this.state.player, ...this.state.board.slice(4 + 1)]
                    }, () => console.log(this.state.board));
                    break;
                case "cell-6":
                    this.setState({
                        board: [...this.state.board.slice(0,5), this.state.player, ...this.state.board.slice(5 + 1)]
                    }, () => console.log(this.state.board));
                    break;
                case "cell-7":
                    this.setState({
                        board: [...this.state.board.slice(0,6), this.state.player, ...this.state.board.slice(6 + 1)]
                    }, () => console.log(this.state.board));
                    break;
                case "cell-8":
                    this.setState({
                        board: [...this.state.board.slice(0,7), this.state.player, ...this.state.board.slice(7 + 1)]
                    }, () => console.log(this.state.board));
                    break;
                case "cell-9":
                    this.setState({
                        board: [...this.state.board.slice(0,8), this.state.player, ...this.state.board.slice(8 + 1)]
                    }, () => console.log(this.state.board));
                    break;
                default:
                    console.log('');
                    break;
            }
        }

    }

    render() {
        return (
            <div className="container">
                <div className="choice-container">
                    <h3 className="choice-question">
                        Play as 
                        <span onClick={this.handleChoice}>{X}</span>
                        or
                        <span onClick={this.handleChoice}>{O}</span>
                        ?
                    </h3>                
                </div>

                <div className="board-container">
                    <h3 className="choice-statement">You are {this.state.player}</h3>                
                    <div className="row">
                        <div className="cell" id="cell-1" onClick={this.handleOnClick}>{this.state.board[0]}</div>
                        <div className="cell" id="cell-2" onClick={this.handleOnClick}>{this.state.board[1]}</div>
                        <div className="cell" id="cell-3" onClick={this.handleOnClick}>{this.state.board[2]}</div>
                    </div>
                    <div className="row">
                        <div className="cell" id="cell-4" onClick={this.handleOnClick}>{this.state.board[3]}</div>
                        <div className="cell" id="cell-5" onClick={this.handleOnClick}>{this.state.board[4]}</div>
                        <div className="cell" id="cell-6" onClick={this.handleOnClick}>{this.state.board[5]}</div>
                    </div>
                    <div className="row">
                        <div className="cell" id="cell-7" onClick={this.handleOnClick}>{this.state.board[6]}</div>
                        <div className="cell" id="cell-8" onClick={this.handleOnClick}>{this.state.board[7]}</div>
                        <div className="cell" id="cell-9" onClick={this.handleOnClick}>{this.state.board[8]}</div>
                    </div>
                    <span className="resetButton" onClick={this.handleReset}>Reset</span>                             
                </div>
            </div>

        );
    }

}

export default Board;