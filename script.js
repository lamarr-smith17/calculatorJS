const add = (a,b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
}
const divide = (a, b) => {
    return a / b;
}

const operator = (operand, a, b) => {
    const operation = operand;
    switch(operation){
        case '+':
            add(a, b);
            return add(a,b);
        case '-':
            subtract(a,b);
            return subtract(a,b);
        case '*':
            multiply(a,b);
            return multiply(a,b);
        case '/':
            divide(a,b);
            return divide(a,b);
        default:
            alert("Invalid operator entered!");
    };
 
}