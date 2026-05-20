const numButtons = document.querySelectorAll(".numbers button");
const operationButtons = document.querySelectorAll(".operator");
const resultButton = document.querySelector("#result");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const prefixButton = document.querySelector("#prefix");
const commaButton = document.querySelector("#comma");
const rootButton = document.querySelector("#root");
const suptwoButton = document.querySelector("#suptwo");
const supthreeButton = document.querySelector("#supthree");
const piButton = document.querySelector("#pi");
const display = document.querySelector(".display");
const historyPanel = document.querySelector(".historyPanel");
const historyResults = document.querySelectorAll(".historyResults");
let displayNumber = document.querySelector("#displayNumber");

const numArray = ["1","2","3","4","5","6","7","8","9","0"]
const opObject = {addition : "+",
                  subtraction: "-",
                  multiplication: "×",
                  division: "÷",
                  result: "="}

let firstNumber;
let secondNumber;
let storedOperator;
let result;
let errorState = false;



//Number buttons
for (button of numButtons){
  button.addEventListener("click", (event) => {
    if (errorState === true){return}
    if (result !== undefined && firstNumber !== undefined && event.target.id !== "prefix" && event.target.id !== "comma"){
      result = undefined;
      displayNumber.textContent = 0;
      concatNumber(event.target.textContent);
      return;
    } else if (result !== undefined && event.target.id !== "prefix" && event.target.id !== "comma"){
      result = undefined;
      displayNumber.textContent = 0;
    } else if (event.target.id != "comma" && event.target.id != "prefix"
        && (!Object.values(opObject).some(op => displayNumber.textContent.endsWith(op)))){
          concatNumber(event.target.textContent);
    } else if (Object.values(opObject).some(op => displayNumber.textContent.endsWith(op)) && event.target.id != "prefix" && event.target.id != "comma"){
      displayNumber.textContent = 0;
      concatNumber(event.target.textContent);
      return;
    }
  })
}

//Store Operator
function storeOperator(){
  storedOperator = displayNumber.textContent.slice(-1);
  console.log(`stored "${storedOperator}" as new operator`);
}

//Concat Numbers
function concatNumber(number){
  if (displayNumber.textContent.length === 10){
      return false;
  } else if (displayNumber.textContent === "0") {
    displayNumber.textContent = parseFloat(number);
  } else
    displayNumber.textContent += parseFloat(number);
  }


// Operator buttons
for (button of operationButtons){
  button.addEventListener("click", (event) => {
    if (errorState === true){return}
    if (result !== undefined){
      result = undefined;
      if (Object.values(opObject).some(op => displayNumber.textContent.endsWith(op))){
        displayNumber.textContent = displayNumber.textContent.slice(0, -1);
        displayNumber.textContent += opObject[event.target.id];
      } else {
        displayNumber.textContent += opObject[event.target.id];
      }
      storeOperator();
    } else if (Object.values(opObject).some(op => displayNumber.textContent.endsWith(op))){
      displayNumber.textContent = displayNumber.textContent.slice(0, -1);
      displayNumber.textContent += opObject[event.target.id];
      storeOperator();
    } else {
        displayNumber.textContent += opObject[event.target.id];
        storeNumbers();
        storeOperator();
    }
  })
}

//Store and initiate calculation
function storeNumbers(){
  if (firstNumber === undefined){
      firstNumber = parseFloat(displayNumber.textContent.slice(0, -1));
      console.log(`stored ${firstNumber} as first number`);
  } else if (Object.values(opObject).some(op => displayNumber.textContent.endsWith(op))){
      secondNumber = parseFloat(displayNumber.textContent.slice(0, -1));
      console.log(`stored ${secondNumber} as second number`);
      calculateResult(storedOperator);
  } else {
    secondNumber = parseFloat(displayNumber.textContent);
    console.log(`stored ${secondNumber} as second number`);
    calculateResult(storedOperator);
  }
}

//Simple Result
resultButton.addEventListener("click", () => {
  if (errorState === true){return}
  if (firstNumber === undefined || storedOperator === undefined){
    return false;
  } else if (Object.values(opObject).some(op => displayNumber.textContent.endsWith(op))){
    return false;
  } else {
      storeNumbers();
  }
})

//Arithmetic Calculations
function calculateResult(operation){
  //Addition
  if (operation === "+"){
    result = parseFloat(firstNumber)+parseFloat(secondNumber)
    console.log(`adding ${secondNumber} to ${firstNumber} to get ${result}`)
  }
  //Subtraction
  if (operation === "-"){
    result = parseFloat(firstNumber)-parseFloat(secondNumber)
    console.log(`subtracting ${secondNumber} from ${firstNumber} to get ${result}`)
  }
  //Multiplication
  if (operation === "×"){
    result = parseFloat(firstNumber)*parseFloat(secondNumber)
    console.log(`multiplicating ${secondNumber} with ${firstNumber} to get ${result}`)
  }
  //Division
    if (operation === "÷"){
      if(secondNumber === 0){
        displayNumber.textContent = "Thats not allowed";
        errorState = true;
        return;
      }
    result = parseFloat(firstNumber)/parseFloat(secondNumber)
    console.log(`dividing ${firstNumber} by ${secondNumber} to get ${result}`)
  }

  //Output Validation
  if (result.toString().length > 10){
    displayNumber.textContent = result.toPrecision(10)
    saveToHistory(result.toPrecision(10));
    console.log("......saveToHistory called");
  } else {
    displayNumber.textContent = result
    saveToHistory(result);
    console.log(".........saveToHistory called")
  }
  if (event.target.id !== "result"){displayNumber.textContent += opObject[event.target.id]}

  //Reset variables
  firstNumber = result;
  console.log(`set firstNumber to ${result}`)
  secondNumber = 0;
  storedOperator = undefined;
  console.log(`reset secondNumber and storedOperator`)
}

    //Single Number Operations
//Square Root
rootButton.addEventListener("click", () => {
  if (errorState === true){return}
  let savedNumber = 0;
  if (Object.values(opObject).some(op => displayNumber.textContent.endsWith(op))){
    savedNumber = parseFloat(displayNumber.textContent.slice(0, -1));}
  else{
    savedNumber = displayNumber.textContent;
  }
  result = Math.sqrt(savedNumber)
  //Output Validation
  if (result.toString().length > 10){displayNumber.textContent = result.toPrecision(10)}
  else {displayNumber.textContent = result}
})

//Power2
suptwoButton.addEventListener("click", () => {
  if (errorState === true){return}
  let savedNumber = 0;
  if (Object.values(opObject).some(op => displayNumber.textContent.endsWith(op))){
    savedNumber = parseFloat(displayNumber.textContent.slice(0, -1));}
  else{
    savedNumber = displayNumber.textContent;
  }
  result = savedNumber ** 2;
  //Output Validation
  if (result.toString().length > 10){displayNumber.textContent = result.toPrecision(10)}
  else {displayNumber.textContent = result}
})

//Power3
supthreeButton.addEventListener("click", () => {
  if (errorState === true){return}
  let savedNumber = 0;
  if (Object.values(opObject).some(op => displayNumber.textContent.endsWith(op))){
    savedNumber = parseFloat(displayNumber.textContent.slice(0, -1));}
  else{
    savedNumber = displayNumber.textContent;
  }
  result = savedNumber ** 3;
  //Output Validation
  if (result.toString().length > 10){displayNumber.textContent = result.toPrecision(10)}
  else {displayNumber.textContent = result}
})

//Pi
piButton.addEventListener("click", () => {
  if (errorState === true){return}
  if (Object.values(opObject).some(op => displayNumber.textContent.endsWith(op)) || !Object.values(opObject).some(op => displayNumber.textContent.endsWith(op))){
    displayNumber.textContent = "0"
  }
  concatNumber("3.14159265");
})



//Comma button
commaButton.addEventListener("click", (event) => {
  if (errorState === true){return}
  if (displayNumber.textContent.includes(".")){
      return false;
  } else if (Object.values(opObject).some(op => displayNumber.textContent.endsWith(op))){
      return;
  } else if (displayNumber.textContent === "0"){
      displayNumber.textContent = "0.";
  } else {
        displayNumber.textContent += ".";
  }
})

//Prefix button
prefixButton.addEventListener("click", () => {
  if (errorState === true){return}
  if (displayNumber.textContent === "0"){
    return false;
  } else if (displayNumber.textContent[0] != "-" && !isNaN(parseFloat(displayNumber.textContent))){
    console.log("minus added");
    displayNumber.textContent = "-" + displayNumber.textContent;
    storeNumbers();
  } else if (Number.isNaN(parseFloat(displayNumber.textContent[0])) && displayNumber.textContent !== undefined){
    console.log("minus removed");
    displayNumber.textContent = displayNumber.textContent.slice(1);
    storeNumbers();
  }})

//Clear button
clearButton.addEventListener("click", clearCalculator);

function clearCalculator(){
  displayNumber.textContent = "0";
  firstNumber = undefined;
  secondNumber = undefined;
  storedOperator = undefined;
  result = undefined;
  errorState = false;
}


//Delete button
deleteButton.addEventListener("click", () => {
  if (errorState === true){return}
  if (displayNumber.textContent.length === 1 ||
      displayNumber.textContent.length === 2 &&
      displayNumber.textContent[0] === "-")
      {
        displayNumber.textContent = "0"
  } else {
      displayNumber.textContent = displayNumber.textContent.slice(0, -1);
  }
})


//Save results to history
function saveToHistory(resultToSave) {
  for (let i = 0; i < historyResults.length - 1; i++){
    historyResults[i].textContent = historyResults[i+1].textContent;
    historyResults[i].previousElementSibling.style.visibility = getComputedStyle(historyResults[i+1].previousElementSibling).visibility;
  }
  historyResults[historyResults.length -1].textContent = resultToSave;
  historyResults[historyResults.length -1].previousElementSibling.style.visibility = "visible";
}
