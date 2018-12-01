import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import Reset from '../components/Reset';

class Winner extends Component {
    componentWillMount() {
        ReactModal.setAppElement('body');
    }

    render() {
        let endgame = this.props.endgame;
        let winner;

        if(endgame === undefined) {
            return null;
        } else if(endgame !== ''){
            winner = <h3 className="winner">Winner: {this.props.endgame}</h3>
            return (
                <ReactModal className="winner-container" isOpen={true}>
                    {winner}
                    <Reset />   
                </ReactModal>
            );  
        }
    }
}

const mapStateToProps = (state) => {
    return {
        endgame: state.winnerReducer.winner
    }
}

export default connect(mapStateToProps)(Winner);