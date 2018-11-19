import React ,{Component} from 'react';

class ChoiceQuestion extends Component {
    constructor(props){
        super(props);
        this.state = {
            player: '',
            computer: ''
        }

        this.handleChoice = this.handleChoice.bind(this);
    }


    handleChoice(e) {
        if(e.target.id === "X"){
            this.setState({
                player: 'X',
                computer: 'O'
            }, () => console.log('player: ', this.state.player, 'computer: ', this.state.computer));
        } else if(e.target.id === "O"){
            this.setState({
                player: 'O',
                computer: 'X'
            }, () => console.log('player: ', this.state.player, 'computer: ', this.state.computer));            
        }
    }

    render() {
        return (
            <div className="choice-container">
                <h3 className="choice-question">
                    Play as 
                    <span id="X" onClick={this.handleChoice}>X</span>
                    or
                    <span id="O" onClick={this.handleChoice}>O</span>
                    ?
                </h3>                
            </div>
        );        
    }

}

export default ChoiceQuestion;