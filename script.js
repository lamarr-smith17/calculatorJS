const btnContainer = document.querySelectorAll('.btn');
const currentDisplay = document.getElementById('currentDisplay');
const previousDisplay = document.getElementById('previousDisplay');
let blank = [];
let runT = 0;

btnContainer.forEach(button =>{
    button.addEventListener('click', ()=>{
        switch(button.innerHTML){
            // case '.':
            //     blank += button.innerHTML; // Adds the number clicked to the blank variable
            //     currentDisplay.innerText = blank;
            case 'Del':
                let newBlank = blank.slice(0, blank.length - 1);
                console.log(newBlank)
                break;
            case '=':
                let result = test(blank);
                previousDisplay.innerText = blank + ' ' + '=' + ' ' + result;
                currentDisplay.innerText = result;
                blank = [];
                blank += runT;
                break;
            case 'Clear':
                clear();
                break;
            default:
                blank += button.innerHTML; // Adds the number clicked to the blank variable
                currentDisplay.innerText = blank;
        }        
    })
})

test = ()=>{
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

        if (runT !=0 && blank.length == 1){
            let arSlice = runT;
            let arEnd;
            for (let j = i+1; j <= blank.length; j++){ // Moves the index to the first right-side value
                if(blank[j] == '+' || blank[j] == '-' || blank[j]== '*' || blank[j] == '/' ){ 
                    let z = blank[j];
                    for (let a = j + 1; a < blank.length; a++){
                        if(blank[a] == '+' || blank[a] == '-' || blank[a]== '*' || blank[a] == '/' ){ // Finds the next operator, points to the index, and it is then used to find the end
                        arEnd = parseInt(blank.slice(j+1, a))
                        break;
                        } else {
                            arEnd = parseInt(blank.slice(j+1));
                            break;
                        }
                    }
                    arSlice = runT;
                    let value = operate(z, arSlice, arEnd);
                    runT = value;
                }

            }
            return runT;
        }

        if (runT !=0){
            let arSlice = runT;
            let arEnd;
            for (let j = i+1; j <= blank.length; j++){ // Moves the index to the first right-side value
                if(blank[j] == '+' || blank[j] == '-' || blank[j]== '*' || blank[j] == '/' ){
                    let z = blank[j];
                    for (let a = j + 1; a < blank.length; a++){
                        if(blank[a] == '+' || blank[a] == '-' || blank[a]== '*' || blank[a] == '/' ){ // Finds the next operator, points to the index, and it is then used to find the end
                        arEnd = parseInt(blank.slice(j+1, a))
                        break;
                        } else {
                            arEnd = parseInt(blank.slice(j+1));
                            break;
                        }
                    }
                    arSlice = runT;
                    let value = operate(z, arSlice, arEnd);
                    runT = value;
                }

            }
            return runT;
        }
    }
}
   
operate = (operand, a, b) => {
    const operation = operand;
    switch(operation){
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
            let divide = a / b;
            return divide;
        default:
            return;
    };
}
clear = ()=>{
    previousDisplay.innerText = 0;
    currentDisplay.innerText = 0;
    blank = [];
    runT = 0;
}
// btnSelector();
