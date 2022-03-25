const btnContainer = document.querySelectorAll('.btn');
const currentDisplay = document.getElementById('currentDisplay');
const previousDisplay = document.getElementById('previousDisplay');
let operation = [];
let runT = 0;

window.addEventListener('keydown', numInput)
btnContainer.forEach(button =>{
    button.addEventListener('click', ()=>{
        switch(button.innerText){
            case '.':
                if(operation.includes('.')){
                    return ;
                }else{
                    operation += button.innerText; // Adds the number clicked to the operation variable
                    currentDisplay.innerText = operation;
                }
                break;
            case 'Del':
                del(); 
                break;
            case '=':
                equals();
                break;
            case 'Clear':
                clear();
                break;
            default:
                operation += button.innerText; // Adds the number clicked to the operation variable
                currentDisplay.innerText = operation;
        }        
    })
})
function numInput(input){
    if(input.key >= 0 && input.key <= 9){ // Numbers 0-9
        operation += input.key;
        currentDisplay.innerText = operation;
    }
    if (input.key === '+' || input.key === '-' || input.key === '*' ||input.key === '/'){
        operation += input.key;
        currentDisplay.innerText = operation;
    }
    if(input.key === 'Backspace'){
        del();
    }
    if(input.key === 'Enter'){
        let result = evalute(operation);
            previousDisplay.innerText = operation + ' ' + '=' + ' ' + result;
            currentDisplay.innerText = result;
            operation = [];
            operation += runT;
    }
}
function evalute(){
    for (let i = 0; i < operation.length; i++){ // Starts the for loop that goes through the length of the string
        if (runT === 0 && operation[i] === '+' || operation[i] === '-' || operation[i]=== '*' || operation[i] === '/' ){ // Starting if statement to get the running total its first non-zero value
            let opLeft = parseFloat(operation.slice(0, i)); // Makes the left-side of the operator into an int
            let x = operation[i]; // The index of the operator
            let opRight; // Sets the right-side variable
            for (let j = i+1; j <= operation.length; j++){ // Moves the index to the first right-side value and starts the for loop to get the entire length of the value
                if(operation[j] === '+' || operation[j] === '-' || operation[j]=== '*' || operation[j] === '/' ){
                    opRight = parseFloat(operation.slice(i + 1, j)); // Makes the right-side of the operator into an int
                    let value = operate(x, opLeft, opRight);
                    runT = value;
                    break; // Stops the first operation code if there is more than one operator
                }
                if(j === operation.length){ // If the index is equal to the length of the string, return the sum
                    let opRight = parseFloat(operation.slice(i + 1));
                    if (isNaN(opRight)){ // If the user presses the equal button before entering another number, it sets opRight equal to opLeft and does the operation
                        opRight = opLeft;
                        operation += opRight;
                        let value = operate(x, opLeft, opRight);
                        runT = value;
                        return value;
                    }else{
                        let value = operate(x, opLeft, opRight);
                        runT = value;
                        return value;
                    }
                    
                }
            } 
        }

        if (runT !=0 && operation.length === 1){
            let opLeft = runT;
            let opRight;
            for (let j = i+1; j <= operation.length; j++){ // Moves the index to the first right-side value
                if(operation[j] === '+' || operation[j] === '-' || operation[j]=== '*' || operation[j] === '/' ){ 
                    let z = operation[j];
                    for (let a = j + 1; a < operation.length; a++){
                        if(operation[a] === '+' || operation[a] === '-' || operation[a]=== '*' || operation[a] === '/' ){ // Finds the next operator, points to the index, and it is then used to find the end
                        opRight = parseFloat(operation.slice(j+1, a))
                        break;
                        } else {
                            opRight = parseFloat(operation.slice(j+1));
                            break;
                        }
                    }
                    opLeft = runT;
                    let value = operate(z, opLeft, opRight);
                    runT = value;
                }

            }
            return runT;
        }

        if (runT !=0){
            let opLeft = runT;
            let opRight;
            for (let j = i+1; j <= operation.length; j++){ // Moves the index to the first right-side value
                if(operation[j] === '+' || operation[j] === '-' || operation[j]=== '*' || operation[j] === '/' ){
                    let z = operation[j];
                    for (let a = j + 1; a < operation.length; a++){
                        if(operation[a] === '+' || operation[a] === '-' || operation[a]=== '*' || operation[a] === '/' ){ // Finds the next operator, points to the index, and it is then used to find the end
                            opRight = parseFloat(operation.slice(j+1, a))
                            break;
                        } else {
                            opRight = parseFloat(operation.slice(j+1));
                            break;
                        }
                    }
                    if (isNaN(opRight)){ // If the user presses the equal button before entering another number, it sets opRight equal to opLeft and does the operation
                        opRight = opLeft;
                        operation += opRight;
                        let value = operate(z, opLeft, opRight);
                        runT = value;
                        return value;
                    }
                    opLeft = runT;
                    let value = operate(z, opLeft, opRight);
                    runT = value;
                }

            }
            return runT;
        }
    }
}
function equals(){
    let result = evalute(operation);
    let roundedResult = (result * 100) / 100;
    previousDisplay.innerText = operation + ' ' + '=' + ' ' + roundedResult;
    currentDisplay.innerText = roundedResult;
    operation = [];
    operation += runT;
}   
function operate(operand, a, b){
    switch(operand){
        case '+':
            let add = a + b;
            return add;
        case '-':
            let subtract = a - b;
            return subtract;
        case '*':
            let multiply = a * b;
            return multiply;
        case '/':
            if (b === 0){
                return currentDisplay.innerText = 'Cannot divide by zero';
            }else{
                let divide = a / b;
                return divide;
            }
        default:
            return;
    };
}
function clear(){
    previousDisplay.innerText = 0;
    currentDisplay.innerText = 0;
    operation = [];
    runT = 0;
}
function del(){
    let newoperation = operation.slice(0, operation.length - 1);
        if(newoperation.length === 0){
            operation = [];
            currentDisplay.innerText = newoperation.length;
        }else{
            operation = newoperation;
            currentDisplay.innerText = operation;
        }
};
