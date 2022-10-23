import { CalculatorActions } from '../calculatorReducer';

export type CalculatorStateType = {
    currentOperand: string;
    prevOperand: string;
    operation: string;
    overwrite: boolean;
};

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
