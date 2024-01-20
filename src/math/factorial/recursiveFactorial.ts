export const recursiveFactorial = (value: number): number => {
    return value > 1 ? value * recursiveFactorial(value - 1) : 1;
}