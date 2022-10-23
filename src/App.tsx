import { useReducer } from 'react';
import './App.css';
import {
    ActionsType,
    CalculatorActions,
    calculatorReducer,
    initialState,
} from './calculatorReducer';

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

const App = () => {
    const [state, dispatch] = useReducer(calculatorReducer, initialState);

    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">
                    {state.prevOperand} {state.operation}
                </div>
                <div className="current-operand">{state.currentOperand}</div>
            </div>
            <button className="span-two">AC</button>
            <button>DEL</button>
            <button>÷</button>
            <DigitButton digit="7" dispatch={dispatch} />
            <DigitButton digit="8" dispatch={dispatch} />
            <DigitButton digit="9" dispatch={dispatch} />
            <button>*</button>
            <DigitButton digit="4" dispatch={dispatch} />
            <DigitButton digit="5" dispatch={dispatch} />
            <DigitButton digit="6" dispatch={dispatch} />
            <button>+</button>
            <DigitButton digit="1" dispatch={dispatch} />
            <DigitButton digit="2" dispatch={dispatch} />
            <DigitButton digit="3" dispatch={dispatch} />
            <button>-</button>
            <DigitButton digit="." dispatch={dispatch} />
            <button>0</button>
            <button className="span-two">=</button>
        </div>
    );
};

export default App;
