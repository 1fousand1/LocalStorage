const inititalState = {
    value: 0
}

type InititalStateType = typeof inititalState

export const counterReducer = (state: InititalStateType = inititalState, action: ActionTypes): InititalStateType => {
    switch (action.type) {
        case "INC-VALUE": {
            return {...state, value: state.value + 1}
        }
        case "SET-VALUE-FROM-LOCAL-STORAGE": {
            return {...state, value: action.value}
        }

        default:
            return state

    }

}

export const incValueAC = () => ({type: "INC-VALUE"} as const)
export const setValuesFromLocalStorageAC = (value: number) => ({type: "SET-VALUE-FROM-LOCAL-STORAGE", value} as const)

export type IncValueActionType = ReturnType<typeof incValueAC>
export type SetValueFromLocalStorageActionType = ReturnType<typeof setValuesFromLocalStorageAC>

type ActionTypes = IncValueActionType | SetValueFromLocalStorageActionType