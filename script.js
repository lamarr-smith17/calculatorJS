const btnContainer = document.querySelector('.buttonNums');
const btnNumSelector = btnContainer.getElementsByClassName('btn');
const displayText = document.getElementById('displayText');
// Selects all of the buttons and adds event listeners to them
for (let i = 0; i < btnNumSelector.length; i++){
    btnNumSelector.item(i).addEventListener('click', () =>{
        let displayValue = i;
        displayText.innerHTML = displayValue;
    })
}

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

const operate = (operand, a, b) => {
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

