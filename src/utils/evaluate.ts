import { CalculatorStateType } from '../calculatorReducer';

export const evaluate = ({
    currentOperand,
    operation,
    prevOperand,
}: CalculatorStateType): string => {
    const curNum = parseFloat(currentOperand);
    const prevNum = parseFloat(prevOperand);

    if (isNaN(curNum) || isNaN(prevNum)) return '';

    let result = 0;

    switch (operation) {
        case '+':
            result = prevNum + curNum;
            break;
        case '-':
            result = prevNum - curNum;
            break;
        case '*':
            result = prevNum * curNum;
            break;
        case '÷':
            result = prevNum / curNum;
            break;

        default:
            break;
    }

    return `${result}`;
};
