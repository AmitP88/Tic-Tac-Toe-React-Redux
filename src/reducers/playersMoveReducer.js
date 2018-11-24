import { 
    PLAYER_CHOOSES_CELL_1,
    PLAYER_CHOOSES_CELL_2,
    PLAYER_CHOOSES_CELL_3,
    PLAYER_CHOOSES_CELL_4,
    PLAYER_CHOOSES_CELL_5,
    PLAYER_CHOOSES_CELL_6,
    PLAYER_CHOOSES_CELL_7,
    PLAYER_CHOOSES_CELL_8,
    PLAYER_CHOOSES_CELL_9
} from '../actions/playerActions';
import { initialState } from '../store/store';

const playersMoveReducer = (state = initialState, action) => {   
    switch(action.type) {
        case PLAYER_CHOOSES_CELL_1:
            console.log(action);
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        case PLAYER_CHOOSES_CELL_2:
            console.log(action);
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        case PLAYER_CHOOSES_CELL_3:
            console.log(action);
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        case PLAYER_CHOOSES_CELL_4:
            console.log(action);
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        case PLAYER_CHOOSES_CELL_5:
            console.log(action);
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        case PLAYER_CHOOSES_CELL_6:
            console.log(action);
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        case PLAYER_CHOOSES_CELL_7:
            console.log(action);
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        case PLAYER_CHOOSES_CELL_8:
            console.log(action);
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        case PLAYER_CHOOSES_CELL_9:
            console.log(action);
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        default:        
            return state;
    }
}

export default playersMoveReducer;