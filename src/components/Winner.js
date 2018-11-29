import React from 'react';
import Reset from './Reset';

const Winner = () => {
    return (
        <div className="winner-container">
            <h3 className="winner">You </h3>
            <Reset />        
        </div>
    );
}

// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         endgame: state.winnerReducer.endgame.winner
//     }
// }

export default Winner;