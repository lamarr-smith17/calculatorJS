const btnContainer = document.querySelector('.buttonNums');
const btnNumSelector = btnContainer.getElementsByClassName('btn');
const btnOps = document.querySelector('.buttonOps');
const btnOpsSelector = btnOps.getElementsByClassName('btn');
const displayText = document.getElementById('displayText');
let blank = [];
let displayV = "";
let runTT = 0; // Running total to keep track of sum

// Selects all of the number buttons and adds event listeners to them
function btnSelector (){
    for (let i = 0; i < btnNumSelector.length; i++){
        btnNumSelector.item(i).addEventListener('click', () =>{
            blank += i; // Adds the number clicked to the blank variable
            displayV += i; // Adds the number to the display value variable
            displayText.innerHTML = displayV;
            return blank;
        })
    }
}

// Selects all of the operators and adds event listeners to them
for (let o = 0; o < btnOpsSelector.length; o++){
    btnOpsSelector.item(o).addEventListener('click', ()=>{
        let displayValue = o;
        switch(displayValue){
            case 0:
                displayValue = '+';
                blank += displayValue; // Adds the operator to the blank variable
                
                displayV = " "; 
                displayText.innerHTML = " ";
                displayText.innerHTML = displayValue;
                // let runT = test(blank);
                break;
            case 1:
                displayValue = '-';
                blank += displayValue;
                displayV = " "; 
                displayText.innerHTML = displayValue;
                break;
            case 2:
                displayValue = '*';
                blank += displayValue;
                displayV = " "; 
                displayText.innerHTML = displayValue;
                break;
            case 3: 
                displayValue = '/';
                blank += displayValue;
                displayV = " "; 
                displayText.innerHTML = displayValue;
                break;
            case 4:
                displayValue = '='
                let jj = test(blank);
                runTT = jj;
                displayText.innerHTML = jj;
                break;
            case 5:
                displayText.innerHTML = 0;
                displayV = "";
                blank = "";
                runTT = 0;
        }
    })
}

function test(){
    let runT = 0;
    for (let i = 0; i < blank.length; i++){ // Starts the for loop that goes through the length of the string
        if (runT == 0 && blank[i] == '+' || blank[i] == '-' || blank[i]== '*' || blank[i] == '/' ){ // Starting if statement to get the running total its first non-zero value
            let arSlice = parseInt(blank.slice(0, i)); // Makes the left-side of the operator into an int
            let x = blank[i]; // The index of the operator
            let arEnd; // Sets the right-side variable
            for (let j = i+1; j <= blank.length; j++){ // Moves the index to the first right-side value and starts the for loop to get the entire length of the value
                if(blank[j] == '+' || blank[j] == '-' || blank[j]== '*' || blank[j] == '/' ){
                    arEnd = parseInt(blank.slice(i + 1, j)); // Makes the right-side of the operator into an int
                    let value = operate(x, arSlice, arEnd);
                    runT = value;
                    break; // Stops the first operation code if there is more than one operator
                }
                if(j == blank.length){ // If the index is equal to the length of the string, return the sum
                    let arEnd = parseInt(blank.slice(i + 1));
                    let value = operate(x, arSlice, arEnd);
                    runT = value;
                    return value;
                }
            }
            
        }
        
        if (runT !=0){
            let arSlice = runT;
            let arEnd;
            
            for (let j = i+1; j <= blank.length; j++){ // Moves the index to the first right-side value and starts the for loop to get the entire length of the value
                if(blank[j] == '+' || blank[j] == '-' || blank[j]== '*' || blank[j] == '/' ){
                    let z = blank[j];
                    console.log(z)
                    arEnd = parseInt(blank.slice(z + 1, j)); // Makes the right-side of the operator into an int
                    console.log(j)
                    
                    let value = operate(z, arSlice, arEnd);
                    let runT = value;
                    console.log(runT)
                    return value;
                }
           
            }           
        }

    }
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
    if (b == 0){
        displayText.innerHTML = 'Cannot divide by zero! Clear and try again!';
    }
    return a / b;
}

const operate = (operand, a, b) => {
    const operation = operand;
    switch(operation){
        case '+':
            add(parseInt(a), parseInt(b));
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
            return;
    };
 
}

btnSelector();
