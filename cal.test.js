// calculator.test.js
const {
    add,
    subtract,
    multiply,
    divide,
    calculateAndPrintResults,
} = require('./calc');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('multiplies 4 * 3 to equal 12', () => {
    expect(multiply(4, 3)).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});

test('handles division by zero', () => {
    expect(divide(10, 0)).toBe('Cannot divide by zero');
});

// Jest test for calculateAndPrintResults function
test('calculates and prints results for valid input', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    
    calculateAndPrintResults(10, 5);

    expect(consoleLogSpy).toHaveBeenCalledWith('Addition: 15');
    expect(consoleLogSpy).toHaveBeenCalledWith('Subtraction: 5');
    expect(consoleLogSpy).toHaveBeenCalledWith('Multiplication: 50');
    expect(consoleLogSpy).toHaveBeenCalledWith('Division: 2');
});

test('handles invalid input', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    
    calculateAndPrintResults('abc', 'xyz');

    expect(consoleLogSpy).toHaveBeenCalledWith('Invalid input. Please enter valid numbers.');
});
