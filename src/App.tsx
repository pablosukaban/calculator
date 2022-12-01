import { useReducer } from 'react';
import './App.css';
import {
    CalculatorActions,
    calculatorReducer,
    initialState,
} from './calculatorReducer';
import { DigitButton } from './components/DigitButton';
import { OperationButton } from './components/OperationButton';
import { formatOperand } from './utils/digitFormatter';

const App = () => {
    const [state, dispatch] = useReducer(calculatorReducer, initialState);

    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">
                    {formatOperand(state.prevOperand)} {state.operation}
                </div>
                <div className="current-operand">
                    {formatOperand(state.currentOperand)}
                </div>
            </div>
            <button
                className="span-two"
                onClick={() => dispatch({ type: CalculatorActions.CLEAR })}
            >
                AC
            </button>
            <button
                onClick={() =>
                    dispatch({ type: CalculatorActions.DELETE_DIGIT })
                }
            >
                DEL
            </button>
            <OperationButton dispatch={dispatch} operation="÷" />
            <DigitButton digit="7" dispatch={dispatch} />
            <DigitButton digit="8" dispatch={dispatch} />
            <DigitButton digit="9" dispatch={dispatch} />
            <OperationButton dispatch={dispatch} operation="*" />
            <DigitButton digit="4" dispatch={dispatch} />
            <DigitButton digit="5" dispatch={dispatch} />
            <DigitButton digit="6" dispatch={dispatch} />
            <OperationButton dispatch={dispatch} operation="+" />
            <DigitButton digit="1" dispatch={dispatch} />
            <DigitButton digit="2" dispatch={dispatch} />
            <DigitButton digit="3" dispatch={dispatch} />
            <OperationButton dispatch={dispatch} operation="-" />
            <DigitButton digit="." dispatch={dispatch} />
            <DigitButton digit="0" dispatch={dispatch} />
            <button
                className="span-two"
                onClick={() => {
                    dispatch({ type: CalculatorActions.EVALUATE });
                }}
            >
                =
            </button>
        </div>
    );
};

export default App;
