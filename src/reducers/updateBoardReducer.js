import { UPDATE_BOARD } from '../actions/updateBoardActions';
import { initialState } from '../store/store';

const updateBoardReducer = (state = initialState, action) => {
    if(action.type === UPDATE_BOARD){
        return {
            board: action.playersMoveBoard.map((val, i) => val === '' && action.computersMoveBoard[i] === '' ? '' : action.computersMoveBoard[i] === '' ? val : action.computersMoveBoard[i])
        }        
    } else {
        return state;
    }
}

export default updateBoardReducer;