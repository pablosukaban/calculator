const INTEGER_FORMATTER = new Intl.NumberFormat('rus-ru', {
    maximumFractionDigits: 0,
});

export function formatOperand(operand: string) {
    if (operand == '') return;

    const [integer, decimal] = operand.split('.');

    if (decimal == null) return INTEGER_FORMATTER.format(+integer);

    return `${INTEGER_FORMATTER.format(+integer)}.${decimal}`;
}
