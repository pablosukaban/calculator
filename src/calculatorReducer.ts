import { evaluate } from './utils/evaluate';

export type CalculatorStateType = {
    currentOperand: string;
    prevOperand: string;
    operation: string;
    overwrite: boolean;
};

export const initialState: CalculatorStateType = {
    currentOperand: '0',
    prevOperand: '',
    operation: '',
    overwrite: true,
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

type EvaluateActionType = {
    type: CalculatorActions.EVALUATE;
};

type DeleteDigitActionType = {
    type: CalculatorActions.DELETE_DIGIT;
};

export type ActionsType =
    | AddDigitActionType
    | ClearActionType
    | ChooseOperationActionType
    | EvaluateActionType
    | DeleteDigitActionType;

export const calculatorReducer = (
    state = initialState,
    action: ActionsType
): CalculatorStateType => {
    switch (action.type) {
        case CalculatorActions.ADD_DIGIT: {
            if (state.overwrite) {
                return {
                    ...state,
                    currentOperand: action.payload.digit,
                    overwrite: false,
                };
            }

            if (action.payload.digit === '0' && state.currentOperand === '0') {
                return state;
            }

            if (
                action.payload.digit === '.' &&
                state.currentOperand.includes('.')
            ) {
                return state;
            }

            if (action.payload.digit === '.' && state.currentOperand == '') {
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

        case CalculatorActions.CLEAR: {
            return initialState;
        }

        case CalculatorActions.EVALUATE: {
            if (
                state.currentOperand == '' ||
                state.operation == '' ||
                state.operation == ''
            ) {
                return state;
            }

            return {
                ...state,
                operation: '',
                prevOperand: '',
                currentOperand: evaluate(state),
                overwrite: true,
            };
        }

        case CalculatorActions.DELETE_DIGIT: {
            if (state.overwrite) {
                return {
                    ...state,
                    currentOperand: '',
                    overwrite: false,
                };
            }

            if (state.currentOperand == '') return state;
            if (state.currentOperand.length === 1) {
                return {
                    ...state,
                    currentOperand: '',
                };
            }

            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1),
            };
        }

        default: {
            return state;
        }
    }
};
