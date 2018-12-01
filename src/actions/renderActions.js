// to render components (sets render state to true)
export const RENDER_CHOICEQUESTION = 'RENDER_CHOICEQUESTION';
export const RENDER_CHOICEANSWER = 'RENDER_CHOICEANSWER';
export const RENDER_BOARD = 'RENDER_BOARD';
export const RENDER_WINNER = 'RENDER_WINNER';

// to un-render components (sets render state to false)
export const UNRENDER_CHOICEQUESTION = 'UNRENDER_CHOICEQUESTION';
export const UNRENDER_CHOICEANSWER = 'UNRENDER_CHOICEANSWER';
export const UNRENDER_BOARD = 'UNRENDER_BOARD';
export const UNRENDER_WINNER = 'UNRENDER_WINNER';

// Action creators for render variables
export const render_choiceQuestion = () => {
    return {
        type: RENDER_CHOICEQUESTION
    }
}

export const render_choiceAnswer = () => {
    return {
        type: RENDER_CHOICEANSWER
    }
}

export const render_board = () => {
    return {
        type: RENDER_BOARD
    }
}

export const render_winner = () => {
    return {
        type: RENDER_WINNER
    }
}

// Action creators for unrender variables
export const unrender_choiceQuestion = () => {
    return {
        type: UNRENDER_CHOICEQUESTION
    }
}

export const unrender_choiceAnswer = () => {
    return {
        type: UNRENDER_CHOICEANSWER
    }
}

export const unrender_board = () => {
    return {
        type: UNRENDER_BOARD
    }
}

export const unrender_winner = () => {
    return {
        type: UNRENDER_WINNER
    }
}