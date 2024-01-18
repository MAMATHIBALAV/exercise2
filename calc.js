// calculator.js

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'Cannot divide by zero';
    }
}

// Function to perform calculations based on user input
function calculateAndPrintResults(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform calculations
        console.log(`Addition: ${add(num1, num2)}`);
        console.log(`Subtraction: ${subtract(num1, num2)}`);
        console.log(`Multiplication: ${multiply(num1, num2)}`);
        console.log(`Division: ${divide(num1, num2)}`);
    } else {
        console.log('Invalid input. Please enter valid numbers.');
    }
}

module.exports = { add, subtract, multiply, divide, calculateAndPrintResults };








