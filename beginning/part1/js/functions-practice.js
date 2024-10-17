//STEP 1
function halfNumber(inputNumber) 
{
    "use strict";
    let result = inputNumber / 2;
    console.log(`Half of ${inputNumber} is ${result}.`);
    return result;
}

//STEP 2
const squareNumber = function(inputNumber) 
{
    "use strict";
    let result = inputNumber * inputNumber;
    console.log(`The result of squaring the number ${inputNumber} is ${result}.`);
    return result;
};

//STEP 3
function percentOf(firstNumber, secondNumber)
{
    "use strict";
    let result = (firstNumber / secondNumber) * 100;
    console.log(`${firstNumber} is ${result}% of ${secondNumber}.`);
    return result;
}

//STEP 4
const findModulus = function(firstNumber, secondNumber)
{
    "use strict";
    let result = firstNumber % secondNumber;
    console.log(`${result} is the modulus of ${firstNumber} and ${secondNumber}.`);
    return result;
}

//STEP 5
let input = prompt("Enter numbers delimited by commas:");
const args = input.split(",");
function sum(argValues)
{
    "use strict";
    let result = 0;
    for (let i = 0; i < argValues.length; i++)
    {
        let value = parseFloat(argValues[i]);
        if (!isNaN(value)) 
        {
            result += value;
        }
    }
    return result;
}
sum(args);