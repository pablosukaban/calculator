export type CalculatorStateType = {
    currentOperand: string;
    prevOperand: string;
    operation: string;
};

export const initialState: CalculatorStateType = {
    currentOperand: '',
    prevOperand: '',
    operation: '',
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

type ClearActionType = {
    type: CalculatorActions.CLEAR;
};

export type ActionsType = AddDigitActionType | ClearActionType;

export const calculatorReducer = (
    state = initialState,
    action: ActionsType
): CalculatorStateType => {
    switch (action.type) {
        case CalculatorActions.CLEAR:
            return initialState;

        case CalculatorActions.ADD_DIGIT:
            if (action.payload.digit === '0' && state.currentOperand === '0') {
                return state;
            }
            if (
                action.payload.digit === '.' &&
                state.currentOperand.includes('.')
            ) {
                return state;
            }
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
