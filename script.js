const numButtons = document.querySelectorAll(".numbers button");
const operationButtons = document.querySelectorAll(".operator");
const resultButton = document.querySelector("#result");
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
    if (event.target.id != "comma" && event.target.id != "prefix"
        && (!opArray.some(op => displayNumber.textContent.endsWith(op)))){
          concatNumber(event.target.textContent);
    }
    if (opArray.some(op => displayNumber.textContent.endsWith(op))){
      storeOperator();
      displayNumber.textContent = undefined;
      concatNumber(event.target.textContent);
    }
  })
}

function storeOperator(){
  storedOperator = displayNumber.textContent.slice(-1);
  console.log(`stored ${storedOperator} as operator`);
}

//Number assembler
function concatNumber(number){
  if (displayNumber.textContent.length === 10){
      return false;
  } else if (displayNumber.textContent === "0") {
    displayNumber.textContent = number;
  } else
    displayNumber.textContent += number;
  }


// Operator buttons
for (button of operationButtons){
  button.addEventListener("click", (event) => {
    if (opArray.some(op => displayNumber.textContent.endsWith(op))){
      displayNumber.textContent = displayNumber.textContent.slice(0, -1);
      displayNumber.textContent = displayNumber.textContent += opObject[event.target.id];
      console.log(`${opObject[event.target.id]} operator changed`);
    } else {
        displayNumber.textContent = displayNumber.textContent += opObject[event.target.id]
        console.log(`${opObject[event.target.id]} operator added`);
        storeNumbers();
    }
  })
}

//Store and initiate calculation
function storeNumbers(){
  if (firstNumber === undefined){
      firstNumber = displayNumber.textContent.slice(0, -1);
      console.log(`stored ${firstNumber} as first number`);
  } else if (displayNumber.textContent[displayNumber.textContent.length] !==
             opArray.some(op => displayNumber.textContent.endsWith(op))){
      secondNumber = displayNumber.textContent.slice(0, -1);
      console.log(`stored ${secondNumber} as second number`);
      calculateResult(storedOperator);
  } else {
    }
  }

//Simple Result
resultButton.addEventListener("click", (event) => {
  result = parseInt(firstNumber)+parseInt(secondNumber);
  if (result.length > 10){displayNumber.textContent = result.toPrecision(10);}
  else {displayNumber.textContent = result}
  firstNumber = result;
})

function calculateResult(operation){
  //Addition
  if (operation === "+"){
    result = parseInt(firstNumber)+parseInt(secondNumber);
      if (result.length > 10){displayNumber.textContent = result.toPrecision(10);}
      else {displayNumber.textContent = result += opObject[event.target.id]}
    firstNumber = result;
  }
  //Subtraction
  if (operation === "-"){
    result = parseInt(firstNumber)-parseInt(secondNumber);
      if (result.length > 10){displayNumber.textContent = result.toPrecision(10);}
      else {displayNumber.textContent = result += opObject[event.target.id]}
    firstNumber = result;
  }
  //Multiplication
  if (operation === "×"){
    result = parseInt(firstNumber)*parseInt(secondNumber);
      if (result.length > 10){displayNumber.textContent = result.toPrecision(10);}
      else {displayNumber.textContent = result += opObject[event.target.id]}
    firstNumber = result;
  }
  //Division
    if (operation === "÷"){
    result = parseInt(firstNumber)/parseInt(secondNumber);
      if (result.length > 10){displayNumber.textContent = result.toPrecision(10);}
      else {displayNumber.textContent = result += opObject[event.target.id]}
    firstNumber = result;
  }

  //Power2

  //Power3

  //Square Root

  //Pi

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
      displayNumber.textContent[0] === "-")
      {
        displayNumber.textContent = "0"
  } else {
      displayNumber.textContent = displayNumber.textContent.slice(0, -1);
  }
})
