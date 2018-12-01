import {
    // render variables
    RENDER_CHOICEQUESTION,
    RENDER_CHOICEANSWER,
    RENDER_BOARD,
    RENDER_WINNER,
    
    // un-render variables
    UNRENDER_CHOICEQUESTION,
    UNRENDER_CHOICEANSWER,
    UNRENDER_BOARD,
    UNRENDER_WINNER   
} from '../actions/renderActions';

import { initialState } from '../store/store';

const renderReducer = (state = initialState, action) => {
    switch(action.type){
        // render components
        case RENDER_CHOICEQUESTION:
            return {
                ChoiceQuestion: true
            }
        case RENDER_CHOICEANSWER:
            return {
                ChoiceAnswer: true
            }
        case RENDER_BOARD:
            return {
                Board: true
            }
        case RENDER_WINNER:
            return {
                Winner: true
            }
        // un-render components
        case UNRENDER_CHOICEQUESTION:
            return {
                ChoiceQuestion: false
            }
        case UNRENDER_CHOICEANSWER:
            return {
                ChoiceAnswer: false
            }
        case UNRENDER_BOARD:
            return {
                Board: false
            }
        case UNRENDER_WINNER:
            return {
                Winner: false
            }
        default:
            return state;
    }
}

export default renderReducer;