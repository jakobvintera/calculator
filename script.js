const numButtons = document.querySelectorAll(".numbers button");
const operationButtons = document.querySelectorAll(".right button");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const prefixButton = document.querySelector("#prefix");
const commaButton = document.querySelector("#comma");
const display = document.querySelector(".display");
let displayNumber = document.querySelector("#displayNumber");
const historyPanel = document.querySelector(".historyPanel");
let firstNumber;
let secondNumber;
let storedOperator;
let result;
const opArray = ["+", "-", "×","÷"]
const numArray = ["1","2","3","4","5","6","7","8","9","0"]



// Number buttons
for (button of numButtons){
  button.addEventListener("click", (event) => {
    if (event.target.id != "comma" && event.target.id != "prefix" ){
      let input = event.target.textContent;
      concatNumber(input);
  }})
}

//Comma button
commaButton.addEventListener("click", (event) => {
  if (event.target.id === "comma" && displayNumber.textContent.includes(".")){
      return false;
  } else if (event.target.id === "comma" && displayNumber.textContent === "0"){
      displayNumber.textContent = "0.";
  } else {
      displayNumber.textContent += "."
  }
})


//Prefix button
prefixButton.addEventListener("click", (event) => {
  console.log(displayNumber.textContent)
  if (event.target.id === "prefix" && displayNumber.textContent === "0" || opArray.includes(displayNumber.textContent)){
    console.log("A")
    return false
  } else if (event.target.id === "prefix" && displayNumber.textContent[0] != "-" && !isNaN(parseInt(displayNumber.textContent))){
    console.log("B")
    console.log(parseInt(displayNumber.textContent))
    displayNumber.textContent = "-" + displayNumber.textContent;
  } else if (event.target.id === "prefix" && isNaN(parseInt(displayNumber.textContent[0])) && displayNumber.textContent != undefined){
    console.log("C")
    displayNumber.textContent = displayNumber.textContent.slice(1);
  }})


// Operator buttons
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
    if (event.target.id === "division"){
      displayNumber.textContent = "÷";
      assembleOperation("÷");
    }
    }

  //calculateResult(operator);

  )
}


//Clear button
clearButton.addEventListener("click", (event) => {
  displayNumber.textContent = "0";
})

//Delete button


//Number assembler
function concatNumber(number){
  if (opArray.includes(displayNumber.textContent) || displayNumber.textContent === "0") {
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

