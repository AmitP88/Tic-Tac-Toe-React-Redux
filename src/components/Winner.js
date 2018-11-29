import React, { Component } from 'react';
import { connect } from 'react-redux';

class Winner extends Component {
    render() {
        let endgame = this.props.endgame;
        let winner;

        if(endgame !== ''){
            winner = <h3 className="winner">Winner: {this.props.endgame}</h3>                    
        }

        return (
            <div className="winner-container">{winner}</div>
        );        
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        endgame: state.winnerReducer.winner
    }
}

export default connect(mapStateToProps)(Winner);

// export default Winner;