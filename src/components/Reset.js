import React from 'react';

const Reset = () => {
    const handleReset = (event) => {
        console.log('Resets the game!', event);
    }

    return (
        <button className="resetButton" onClick={handleReset}>Reset</button>
    );
}

export default Reset;