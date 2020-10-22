export type ActionType =
    | ReturnType<typeof incCountAC>
    | ReturnType<typeof resetCountAC>
    | ReturnType<typeof ChangeStartValueAC>
    | ReturnType<typeof AddStartValueAC>
    | ReturnType<typeof ChangeMaxValueAC>
    | ReturnType<typeof AddMaxValueAC>
    ;

export type StateType = {
    count: number

    startValue: number
    newStartValue: number

    maxValue: number
    newMaxValue: number

}

export const initialState: StateType = {
    count: Number(localStorage.getItem("startValue")),
    maxValue: Number(localStorage.getItem("maxValue")),
    startValue: Number(localStorage.getItem("startValue")),
    newStartValue: Number(localStorage.getItem("startValue")),
    newMaxValue: Number(localStorage.getItem("maxValue")),

}

export const countReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'INC_COUNT':
            return {
                ...state,
                count: state.count + 1
            }

        case 'RESET_COUNT':
            return {
                ...state,
                count: state.startValue
            }


        case 'CHANGE_START_VALUE':

            return {
                ...state,
                newStartValue: action.newStartValue
            }


        case 'ADD_START_VALUE':
            localStorage.setItem('startValue', state.newStartValue.toString())
            return {
                ...state,
                startValue: state.newStartValue,
                count: state.newStartValue
            }

        case 'CHANGE_MAX_VALUE':

            return {
                ...state,
                newMaxValue: action.newMaxValue
            }

        case 'ADD_MAX_VALUE':
            localStorage.setItem('maxValue', state.newMaxValue.toString())
            return {
                ...state,
                maxValue: state.newMaxValue,

            }

        default:
            return state
    }
}


export const incCountAC = () => {
    return {
        type: "INC_COUNT"
    } as const
}
export const resetCountAC = () => {
    return {
        type: "RESET_COUNT"
    } as const
}
export const ChangeStartValueAC = (newStartValue: number) => {

    return {
        type: "CHANGE_START_VALUE",
        newStartValue
    } as const
}
export const AddStartValueAC = () => {
    return {
        type: "ADD_START_VALUE",
    } as const
}
export const ChangeMaxValueAC = (newMaxValue: number) => {
    return {
        type: "CHANGE_MAX_VALUE",
        newMaxValue
    } as const
}
export const AddMaxValueAC = () => {
    return {
        type: "ADD_MAX_VALUE",
    } as const
}
