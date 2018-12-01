import { RENDER_CHOICEANSWER_AND_BOARD } from '../actions/renderActions';
import { RESET } from '../actions/resetActions';
import { initialState } from '../store/store';

const renderReducer = (state = initialState, action) => {
    switch(action.type){
        case RENDER_CHOICEANSWER_AND_BOARD:
            return {
                ChoiceQuestion: false,
                ChoiceAnswer: true,
                Board: true
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