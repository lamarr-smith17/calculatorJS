const btnContainer = document.querySelector('.buttonNums');
const btnNumSelector = btnContainer.getElementsByClassName('btn');
const btnOps = document.querySelector('.buttonOps');
const btnOpsSelector = btnOps.getElementsByClassName('btn');
const displayText = document.getElementById('displayText');
let holdNum = 0;
// Selects all of the number buttons and adds event listeners to them
for (let i = 0; i < btnNumSelector.length; i++){
    btnNumSelector.item(i).addEventListener('click', () =>{
        let displayValue = i;
        displayText.innerHTML = displayValue;
        return holdNum;
    })
}

// Selects all of the operators and adds event listeners to them
for (let o = 0; o < btnOpsSelector.length; o++){
    btnOpsSelector.item(o).addEventListener('click', ()=>{
        let displayValue = o;
        switch(displayValue){
            case 0:
                displayValue = '+';
                operate(displayValue, holdNum, holdNum)
                displayText.innerHTML = displayValue;
                break;
            case 1:
                displayValue = '-';
                displayText.innerHTML = displayValue;
                break;
            case 2:
                displayValue = '*';
                displayText.innerHTML = displayValue;
                break;
            case 3: 
                displayValue = '/';
                displayText.innerHTML = displayValue;
                break;
            case 4:
                displayValue = '='
                displayText.innerHTML = sum;
                break;
        }
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

