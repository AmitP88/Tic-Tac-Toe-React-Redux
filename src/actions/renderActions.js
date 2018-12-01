// to render components (sets render state to true)
export const RENDER_CHOICEQUESTION = 'RENDER_CHOICEQUESTION';
export const RENDER_CHOICEANSWER_AND_BOARD = 'RENDER_CHOICEANSWER_AND_BOARD';
export const RENDER_WINNER = 'RENDER_WINNER';

// Action creators for render variables
export const render_choiceQuestion = () => {
    return {
        type: RENDER_CHOICEQUESTION
    }
}

export const render_choiceAnswerAndBoard = () => {
    return {
        type: RENDER_CHOICEANSWER_AND_BOARD
    }
}

export const render_winner = () => {
    return {
        type: RENDER_WINNER
    }
}