export const UPDATE_BOARD = 'UPDATE_BOARD';

// Action to combine the playersMoveBoard and computerMoveBoard to create an updated board that will be rendered
export const updateBoard = () => {
    return (dispatch, getState) => {
        const currentState = getState();
        console.log(currentState);

        dispatch({
            type: UPDATE_BOARD,
            playersMoveBoard: currentState.playersMoveReducer.board,
            computersMoveBoard: currentState.computersMoveReducer.board
        });
    }
}