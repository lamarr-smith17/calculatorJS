const btnContainer = document.querySelector('.buttonNums');
const btnNumSelector = btnContainer.getElementsByClassName('btn');
const btnOps = document.querySelector('.buttonOps');
const btnOpsSelector = btnOps.getElementsByClassName('btn');
const displayText = document.getElementById('displayText');

let blank = "";
let displayV = "";
// Selects all of the number buttons and adds event listeners to them
for (let i = 0; i < btnNumSelector.length; i++){
    btnNumSelector.item(i).addEventListener('click', () =>{
        blank += i; // Adds the number clicked to the blank variable
        displayV += i; // Adds the number to the display value variable
        displayText.innerHTML = displayV;
        return blank;
    })

}
let blankar = [];

// Selects all of the operators and adds event listeners to them
for (let o = 0; o < btnOpsSelector.length; o++){
    btnOpsSelector.item(o).addEventListener('click', ()=>{
        let displayValue = o;
        switch(displayValue){
            case 0:
                displayValue = '+';
                blank += displayValue; // Adds the operator to the blank variable
                displayV += displayValue; // Adds the operator to the display value variable
                displayText.innerHTML = " ";
                displayText.innerHTML = displayValue;
                break;
            case 1:
                displayValue = '-';
                blank += displayValue;
                displayV += displayValue;
                displayText.innerHTML = displayValue;
                break;
            case 2:
                displayValue = '*';
                blank += displayValue;
                displayV += displayValue;
                displayText.innerHTML = displayValue;
                break;
            case 3: 
                displayValue = '/';
                blank += displayValue;
                displayV += displayValue;
                displayText.innerHTML = displayValue;
                break;
            case 4:
                displayValue = '='
                blankar.push(blank);
                console.log(blankar);
                break;
            case 5:
                displayText.innerHTML = 0;
                displayV = "";
                blank = "";
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

