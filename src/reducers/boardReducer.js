// Player actions
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

// Computer AI actions
import { 
    COMPUTER_CHOOSES_CELL_1,
    COMPUTER_CHOOSES_CELL_2,
    COMPUTER_CHOOSES_CELL_3,
    COMPUTER_CHOOSES_CELL_4,
    COMPUTER_CHOOSES_CELL_5,
    COMPUTER_CHOOSES_CELL_6,
    COMPUTER_CHOOSES_CELL_7,
    COMPUTER_CHOOSES_CELL_8,
    COMPUTER_CHOOSES_CELL_9
} from '../actions/computerActions';

import { initialState } from '../store/store';

const boardReducer = (state = initialState, action) => {
    switch(action.type) {
        // Players' turn
        case PLAYER_CHOOSES_CELL_1:
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        case PLAYER_CHOOSES_CELL_2:
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        case PLAYER_CHOOSES_CELL_3:
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        case PLAYER_CHOOSES_CELL_4:
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        case PLAYER_CHOOSES_CELL_5:
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        case PLAYER_CHOOSES_CELL_6:
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        case PLAYER_CHOOSES_CELL_7:
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        case PLAYER_CHOOSES_CELL_8:
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }
        case PLAYER_CHOOSES_CELL_9:
            return {
                board: [...state.board.slice(0, action.index), action.player, ...state.board.slice(action.index + 1)]
            }


        // Computers' turn
        case COMPUTER_CHOOSES_CELL_1:
            return {
                board: [...state.board.slice(0, action.index), action.computer, ...state.board.slice(action.index + 1)]
            }
        case COMPUTER_CHOOSES_CELL_2:
            return {
                board: [...state.board.slice(0, action.index), action.computer, ...state.board.slice(action.index + 1)]
            }
        case COMPUTER_CHOOSES_CELL_3:
            return {
                board: [...state.board.slice(0, action.index), action.computer, ...state.board.slice(action.index + 1)]
            }
        case COMPUTER_CHOOSES_CELL_4:
            return {
                board: [...state.board.slice(0, action.index), action.computer, ...state.board.slice(action.index + 1)]
            }
        case COMPUTER_CHOOSES_CELL_5:
            return {
                board: [...state.board.slice(0, action.index), action.computer, ...state.board.slice(action.index + 1)]
            }
        case COMPUTER_CHOOSES_CELL_6:
            return {
                board: [...state.board.slice(0, action.index), action.computer, ...state.board.slice(action.index + 1)]
            }
        case COMPUTER_CHOOSES_CELL_7:
            return {
                board: [...state.board.slice(0, action.index), action.computer, ...state.board.slice(action.index + 1)]
            }
        case COMPUTER_CHOOSES_CELL_8:
            return {
                board: [...state.board.slice(0, action.index), action.computer, ...state.board.slice(action.index + 1)]
            }
        case COMPUTER_CHOOSES_CELL_9:
            return {
                board: [...state.board.slice(0, action.index), action.computer, ...state.board.slice(action.index + 1)]
            }
        default:        
            return state;
    }
}

export default boardReducer;