export type CalculatorStateType = {
    currentOperand: string;
    prevOperand: string;
    operation: string;
};

export const initialState: CalculatorStateType = {
    currentOperand: '5',
    prevOperand: '5',
    operation: '+',
};

export enum CalculatorActions {
    ADD_DIGIT = 'addDigit',
    DELETE_DIGIT = 'deleteDigit',
    CLEAR = 'clear',
    CHOOSE_OPERATION = 'chooseOperation',
    EVALUATE = 'evaluate',
}

type AddDigitActionType = {
    type: CalculatorActions.ADD_DIGIT;
    payload: { digit: string };
};

export type ActionsType = AddDigitActionType;

export const calculatorReducer = (
    state = initialState,
    action: ActionsType
): CalculatorStateType => {
    switch (action.type) {
        case CalculatorActions.ADD_DIGIT:
            return {
                ...state,
                currentOperand: `${state.currentOperand || ''}${
                    action.payload.digit
                }`,
            };

        default:
            return state;
    }
};
