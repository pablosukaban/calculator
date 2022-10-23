import { evaluate } from './utils/evaluate';

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

type ChooseOperationActionType = {
    type: CalculatorActions.CHOOSE_OPERATION;
    payload: { operation: string };
};

export type ActionsType =
    | AddDigitActionType
    | ClearActionType
    | ChooseOperationActionType;

export const calculatorReducer = (
    state = initialState,
    action: ActionsType
): CalculatorStateType => {
    switch (action.type) {
        case CalculatorActions.CLEAR: {
            return initialState;
        }

        case CalculatorActions.ADD_DIGIT: {
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
        }

        case CalculatorActions.CHOOSE_OPERATION: {
            if (state.currentOperand == '' && state.prevOperand == '') {
                return state;
            }

            if (state.prevOperand == '') {
                return {
                    ...state,
                    prevOperand: state.currentOperand,
                    operation: action.payload.operation,
                    currentOperand: '',
                };
            }

            if (state.currentOperand == '') {
                return { ...state, operation: action.payload.operation };
            }

            return {
                ...state,
                currentOperand: '',
                operation: action.payload.operation,
                prevOperand: evaluate(state),
            };
        }

        default: {
            return state;
        }
    }
};
