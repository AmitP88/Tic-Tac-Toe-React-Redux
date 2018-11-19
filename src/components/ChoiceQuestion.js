import React from 'react';

const ChoiceQuestion = (X = ' X ', O = ' O ') => {
    const handleChoice = (event) => {
        console.log('handleChoice');
    }

    return (
        <div className="choice-container">
            <h3 className="choice-question">
                Play as 
                <span onClick={handleChoice()}>X</span>
                or
                <span onClick={handleChoice()}>O</span>
                ?
            </h3>                
        </div>
    );
}

export default ChoiceQuestion;