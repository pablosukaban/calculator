import React from 'react';
import { CalculatorActions } from '../calculatorReducer';
import { ActionsType } from '../types';

type OperationButtonProps = {
    operation: string;
    styles?: string;
    dispatch: ({}: ActionsType) => void;
};

export const OperationButton = ({
    dispatch,
    operation,
    styles,
}: OperationButtonProps) => {
    const clickHandler = () => {
        dispatch({
            type: CalculatorActions.CHOOSE_OPERATION,
            payload: { operation },
        });
    };

    return (
        <button className={`${styles}`} onClick={clickHandler}>
            {operation}
        </button>
    );
};
