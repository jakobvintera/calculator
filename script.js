const numButtons = document.querySelectorAll(".numbers button");
const operationButtons = document.querySelectorAll(".right button");
const display = document.querySelector(".display");
let displayNumber = document.querySelector("#displayNumber");
const historyPanel = document.querySelector(".historyPanel");
let firstNumber;
let secondNumber;
let storedOperator;
let result;


// zahl, zahl, zahl number concat bis user operator drückt, dann store in firstNumber (falls firstNumber leer ist) dann zahl, zahl, zahl number concat bis user operator oder = drückt, dann store in secondNumber(falls firstNumber voll ist) und ausrechnen
// result bei display und historyPanel anzeigen
// dann wird result zu firstNumber und secondNumber muss gecleart werden, falls dann eine zahl eingegeben wird wird sie in secondNumber gespeichert


// Number button input listener
for (button of numButtons){
  button.addEventListener("click", (event) => {
    if (event.target.id === "prefix" && displayNumber.textContent != 0 && displayNumber.textContent[0] != "-"){
      displayNumber.textContent = "-" + displayNumber.textContent;
    } else if (event.target.id === "prefix" && displayNumber.textContent[0] === "-"){
        displayNumber.textContent = displayNumber.textContent.slice(1);
    } else if (event.target.id === "comma" && displayNumber.textContent.includes(".")){
        return false;
    } else if (event.target.id === "comma" && displayNumber.textContent === "0"){
        displayNumber.textContent = "0."
    } else {
        let input = event.target.textContent;
        concatNumber(input);
      }
  })
}


// Operator button input listener
for (button of operationButtons){
  button.addEventListener("click", (event) => {
    if (event.target.id === "addition"){

      assembleOperation("+");
      displayNumber.textContent = "+";
    console.log(firstNumber);
    console.log(storedOperator);
    console.log(secondNumber);
    }
    if (event.target.id === "subtraction"){
      displayNumber.textContent = "-";
      assembleOperation("-");
    }
    if (event.target.id === "multiplication"){
      displayNumber.textContent = "×";
      assembleOperation("×");
    }
    }

/*     calculateResult(operator); */
  )
}


//Clear button


//Delete button


//Number assembler
function concatNumber(number){
  let array = ["0", "+", "-", "×","÷"]
  if (array.includes(displayNumber.textContent)) {
    displayNumber.textContent = number;
  } else if (displayNumber.textContent.length === 15){
      return false;
  } else {
    displayNumber.textContent += number;
  }
}

//Store operands and initiate calculation
function assembleOperation(operation){
  if (firstNumber === undefined){firstNumber = displayNumber.textContent}
    else {secondNumber = displayNumber.textContent}
  if (storedOperator === undefined){storedOperator = operation}
    else {


    }
}


function calculateResult(operation){
  //Addition
  if (operation === "+"){
    console.log(firstNumber);
    console.log(storedOperator);
    console.log(secondNumber);
    result = parseInt(firstNumber)+parseInt(secondNumber);
    displayNumber.textContent = result;
    firstNumber = result;
    console.log(result);
  }

  //Subtraction
  if (operation === "-"){
    result = parseInt(firstNumber)-parseInt(secondNumber);
    console.log(result);
  }
  //Multiplication
  if (operation === "×"){
    result = parseInt(firstNumber)*parseInt(secondNumber);
    console.log(result);
  }
  //Division
    if (operation === "÷"){
    result = parseInt(firstNumber)/parseInt(secondNumber);
    console.log(result);
  }

  //Power2

  //Power3

  //Square Root

  //Pi

}

