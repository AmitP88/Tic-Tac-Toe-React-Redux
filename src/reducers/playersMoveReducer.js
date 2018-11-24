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

const playersMoveReducer = (state = initialState.board, action) => {   
    switch(action.type) {
        case PLAYER_CHOOSES_CELL_1:
            return ({
                board: [...state.board.slice(0, action.payload.index), state.choices.player, ...state.board.slice(action.payload.index + 1)]
            }, () => console.log(state));
        case PLAYER_CHOOSES_CELL_2:
            return ({
                board: [...state.board.slice(0, action.payload.index), state.choices.player, ...state.board.slice(action.payload.index + 1)]
            }, () => console.log(state));
        case PLAYER_CHOOSES_CELL_3:
            return ({
                board: [...state.board.slice(0, action.payload.index), state.choices.player, ...state.board.slice(action.payload.index + 1)]
            }, () => console.log(state));
        case PLAYER_CHOOSES_CELL_4:
            return ({
                board: [...state.board.slice(0, action.payload.index), state.choices.player, ...state.board.slice(action.payload.index + 1)]
            }, () => console.log(state));
        case PLAYER_CHOOSES_CELL_5:
            return ({
                board: [...state.board.slice(0, action.payload.index), state.choices.player, ...state.board.slice(action.payload.index + 1)]
            }, () => console.log(state));
        case PLAYER_CHOOSES_CELL_6:
            return ({
                board: [...state.board.slice(0, action.payload.index), state.choices.player, ...state.board.slice(action.payload.index + 1)]
            }, () => console.log(state));
        case PLAYER_CHOOSES_CELL_7:
            return ({
                board: [...state.board.slice(0, action.payload.index), state.choices.player, ...state.board.slice(action.payload.index + 1)]
            }, () => console.log(state));
        case PLAYER_CHOOSES_CELL_8:
            return ({
                board: [...state.board.slice(0, action.payload.index), state.choices.player, ...state.board.slice(action.payload.index + 1)]
            }, () => console.log(state));
        case PLAYER_CHOOSES_CELL_9:
            return ({
                board: [...state.board.slice(0, action.payload.index), state.choices.player, ...state.board.slice(action.payload.index + 1)]
            }, () => console.log(state));
        default:        
            return state;
    }
}

export default playersMoveReducer;