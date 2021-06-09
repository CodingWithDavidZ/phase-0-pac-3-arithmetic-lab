function add(a, b){
    let x = a + b;
    return `${x}`;
}

function subtract(a, b) {
    let y = a - b;
    return `${y}`;
}

//lets remove the extra line of code for the other solutions.

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    return n+=1;
}

function decrement(n) {
    return n-=1;
}

function makeInt(n) {
    let newNumber = parseInt(n, 10);
    return newNumber;
}

function preserveDecimal(n) {
    let decimalNumber = parseFloat(n);
    return decimalNumber
}