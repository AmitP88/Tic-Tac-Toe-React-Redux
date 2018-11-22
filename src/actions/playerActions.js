export const PLAYER_CHOOSES_CELL_1 = "PLAYER_CHOOSES_CELL_1";
export const PLAYER_CHOOSES_CELL_2 = "PLAYER_CHOOSES_CELL_2";
export const PLAYER_CHOOSES_CELL_3 = "PLAYER_CHOOSES_CELL_3";

export const PLAYER_CHOOSES_CELL_4 = "PLAYER_CHOOSES_CELL_4";
export const PLAYER_CHOOSES_CELL_5 = "PLAYER_CHOOSES_CELL_5";
export const PLAYER_CHOOSES_CELL_6 = "PLAYER_CHOOSES_CELL_6";

export const PLAYER_CHOOSES_CELL_7 = "PLAYER_CHOOSES_CELL_7";
export const PLAYER_CHOOSES_CELL_8 = "PLAYER_CHOOSES_CELL_8";
export const PLAYER_CHOOSES_CELL_9 = "PLAYER_CHOOSES_CELL_9";

/* Action creators for when the player chooses
a cell to fill */

export const playerChoosesCell1 = () => {
    return {
        type: PLAYER_CHOOSES_CELL_1,
        payload: {
            index: 0
        }
    }
}

export const playerChoosesCell2 = () => {
    return {
        type: PLAYER_CHOOSES_CELL_2,
        payload: {
            index: 1
        }
    }
}

export const playerChoosesCell3 = () => {
    return {
        type: PLAYER_CHOOSES_CELL_3,
        payload: {
            index: 2
        }
    }
}

export const playerChoosesCell4 = () => {
    return {
        type: PLAYER_CHOOSES_CELL_4,
        payload: {
            index: 3
        }
    }
}

export const playerChoosesCell5 = () => {
    return {
        type: PLAYER_CHOOSES_CELL_5,
        payload: {
            index: 4
        }
    }
}

export const playerChoosesCell6 = () => {
    return {
        type: PLAYER_CHOOSES_CELL_6,
        payload: {
            index: 5
        }
    }
}

export const playerChoosesCell7 = () => {
    return {
        type: PLAYER_CHOOSES_CELL_7,
        payload: {
            index: 6
        }
    }
}

export const playerChoosesCell8 = () => {
    return {
        type: PLAYER_CHOOSES_CELL_8,
        payload: {
            index: 7
        }
    }
}

export const playerChoosesCell9 = () => {
    return {
        type: PLAYER_CHOOSES_CELL_9,
        payload: {
            index: 8
        }
    }
}