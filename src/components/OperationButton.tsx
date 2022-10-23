import React from 'react';
import { ActionsType, CalculatorActions } from '../calculatorReducer';

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
    return (
        <button
            className={`${styles}`}
            onClick={() =>
                dispatch({
                    type: CalculatorActions.CHOOSE_OPERATION,
                    payload: { operation },
                })
            }
        >
            {operation}
        </button>
    );
};
