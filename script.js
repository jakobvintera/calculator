const numButtons = document.querySelectorAll(".numbers button");
const operationButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const prefixButton = document.querySelector("#prefix");
const commaButton = document.querySelector("#comma");
const display = document.querySelector(".display");
const historyPanel = document.querySelector(".historyPanel");

let displayNumber = document.querySelector("#displayNumber");

const opArray = ["+", "-", "×","÷"]
const numArray = ["1","2","3","4","5","6","7","8","9","0"]
const opObject = {addition : "+",
                  subtraction: "-",
                  multiplication: "×",
                  division: "÷"}

let firstNumber;
let secondNumber;
let storedOperator;
let result;


//Number buttons
for (button of numButtons){
  button.addEventListener("click", (event) => {
    if (event.target.id != "comma" && event.target.id != "prefix" ){
      concatNumber(event.target.textContent);
  }})
}

//Number assembler
function concatNumber(number){
  if (displayNumber.textContent === "0") {
    displayNumber.textContent = number;
  } else if (displayNumber.textContent[displayNumber.textContent.length] === opArray.includes(displayNumber.textContent)){

  } else if (displayNumber.textContent.length === 15){
      return false;
  } else
    displayNumber.textContent += number;
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
  if (event.target.id === "prefix" && displayNumber.textContent === "0" || opArray.includes(displayNumber.textContent)){
    return false
  } else if (event.target.id === "prefix" && displayNumber.textContent[0] != "-" && !isNaN(parseInt(displayNumber.textContent))){
    displayNumber.textContent = "-" + displayNumber.textContent;
  } else if (event.target.id === "prefix" && isNaN(parseInt(displayNumber.textContent[0])) && displayNumber.textContent != undefined){
    displayNumber.textContent = displayNumber.textContent.slice(1);
  }})

//Clear button
clearButton.addEventListener("click", (event) => {
  displayNumber.textContent = "0";
  firstNumber = undefined;
  secondNumber = undefined;
  storedOperator = undefined;
  result = undefined;
})

//Delete button
deleteButton.addEventListener("click", (event) => {
  if (displayNumber.textContent.length === 1 ||
      displayNumber.textContent.length === 2 &&
      displayNumber.textContent[0] === "-"){
        displayNumber.textContent = "0"
  } else {
      displayNumber.textContent = displayNumber.textContent.slice(0, -1);
  }
})

// Operator buttons
for (button of operationButtons){
  button.addEventListener("click", (event) => {
    if (!opArray.includes(displayNumber.textContent)){
        storeOperation(opObject[event.target.id]);
/*         displayNumber.textContent = opObject[event.target.id]; */
    }}


  )
}

//Store and initiate calculation
function storeOperation(operation){
  if (firstNumber === undefined){
      firstNumber = displayNumber.textContent;
      displayNumber.textContent = displayNumber.textContent += operation;
  } else if (displayNumber.textContent[displayNumber.textContent.length] !== opArray.includes(displayNumber.textContent)){
      secondNumber = displayNumber.textContent;
      calculateResult(operation)
  } else if (storedOperator === undefined){
    storedOperator = operation
  } else {
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
    displayNumber.textContent = result;
    firstNumber = result;
    console.log(result);
  }
  //Multiplication
  if (operation === "×"){
    result = parseInt(firstNumber)*parseInt(secondNumber);
    displayNumber.textContent = result;
    firstNumber = result;
    console.log(result);
  }
  //Division
    if (operation === "÷"){
    result = parseInt(firstNumber)/parseInt(secondNumber);
    displayNumber.textContent = result;
    firstNumber = result;
    console.log(result);
  }

  //Power2

  //Power3

  //Square Root

  //Pi

}

