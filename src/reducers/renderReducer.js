import {
    // render variables
    RENDER_CHOICEQUESTION,
    RENDER_CHOICEANSWER_AND_BOARD,
    RENDER_WINNER
} from '../actions/renderActions';

import { RESET } from '../actions/resetActions';

import { initialState } from '../store/store';

const renderReducer = (state = initialState, action) => {
    switch(action.type){
        // render components
        case RENDER_CHOICEQUESTION:
            return {
                ChoiceQuestion: true
            }
        case RENDER_CHOICEANSWER_AND_BOARD:
            return {
                ChoiceQuestion: false,
                ChoiceAnswer: true,
                Board: true
            }
        case RENDER_WINNER:
            return {
                Winner: true
            }
        case RESET:
            return {
                ChoiceQuestion: initialState.ChoiceQuestion,
                ChoiceAnswer: initialState.ChoiceAnswer,
                Board: initialState.Board,
                Winner: initialState.Winner
            }
        default:
            return state;
    }
}

export default renderReducer;