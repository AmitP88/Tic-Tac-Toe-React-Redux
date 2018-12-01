import React, { Component } from 'react';
import { store } from '../store/store';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import Reset from '../components/Reset';

class Winner extends Component {
    componentWillMount() {
        ReactModal.setAppElement('body');
    }

    render() {
        if(store.getState().renderReducer.Winner === false){
            return null;
        } else {
            let winner;

            if(this.props.endgame === undefined) {
                return null;
            } else if(this.props.endgame !== ''){
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
}

const mapStateToProps = (state) => {
    return {
        endgame: state.winnerReducer.winner
    }
}

export default connect(mapStateToProps)(Winner);