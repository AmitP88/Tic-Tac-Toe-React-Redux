import React from 'react';

const Reset = () => {
    const handleReset = (event) => {
        console.log('Resets the game!', event);
    }

    return (
        <span className="resetButton" onClick={handleReset}>Reset</span>
    );
}

export default Reset;