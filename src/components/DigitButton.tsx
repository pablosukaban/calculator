import { CalculatorActions } from '../calculatorReducer';
import { ActionsType } from '../types';

type DigitButtonProps = {
    dispatch: ({}: ActionsType) => void;
    digit: string;
};

export const DigitButton = ({ dispatch, digit }: DigitButtonProps) => {
    return (
        <button
            onClick={() =>
                dispatch({
                    type: CalculatorActions.ADD_DIGIT,
                    payload: { digit },
                })
            }
        >
            {digit}
        </button>
    );
};
