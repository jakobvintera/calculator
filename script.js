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


//Number buttons
for (button of numButtons){
  button.addEventListener("click", (event) => {
    if (result !== undefined && event.target.id !== "prefix"){
      result = undefined;
      displayNumber.textContent = 0;
    }
    if (event.target.id != "comma" && event.target.id != "prefix"
        && (!Object.values(opObject).some(op => displayNumber.textContent.endsWith(op)))){
          concatNumber(event.target.textContent);
    }
    if (Object.values(opObject).some(op => displayNumber.textContent.endsWith(op)) && event.target.id != "prefix"){
      displayNumber.textContent = 0;
      concatNumber(event.target.textContent);
    }
  })
}

//Store Operator
function storeOperator(){
  storedOperator = displayNumber.textContent.slice(-1);
  console.log(`stored "${storedOperator}" as new operator`);
}

//Number assembler
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
    if (Object.values(opObject).some(op => displayNumber.textContent.endsWith(op))){
      displayNumber.textContent = displayNumber.textContent.slice(0, -1);
      displayNumber.textContent = displayNumber.textContent += opObject[event.target.id];
      storeOperator();
    } else{
        displayNumber.textContent = displayNumber.textContent += opObject[event.target.id];
        storeNumbers();
        storeOperator();
    }
  })
}

//Store and initiate calculation
function storeNumbers(){
  if (firstNumber === undefined){
      firstNumber = displayNumber.textContent.slice(0, -1);
      console.log(`stored ${firstNumber} as first number`);
  } else if (Object.values(opObject).some(op => displayNumber.textContent.endsWith(op))){
      secondNumber = displayNumber.textContent.slice(0, -1);
      console.log(`stored ${secondNumber} as second number`);
      calculateResult(storedOperator);
  } else {
    secondNumber = displayNumber.textContent
    console.log(`stored ${secondNumber} as second number`);
    calculateResult(storedOperator);
  }
}

//Simple Result
resultButton.addEventListener("click", () => {
  if (firstNumber === undefined){
    return false;
  } else if (Object.values(opObject).some(op => displayNumber.textContent.endsWith(op))){
    return false;
  }
  storeNumbers();
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
    result = parseFloat(firstNumber)/parseFloat(secondNumber)
    console.log(`dividing ${firstNumber} by ${secondNumber} to get ${result}`)
  }



  //Power2

  //Power3

  //Square Root

  //Pi

  //Output Validation
  if (result.toString().length > 10){displayNumber.textContent = result.toPrecision(10)}
  else {displayNumber.textContent = result}
  if (event.target.id !== "result"){displayNumber.textContent += opObject[event.target.id]}

  //Reset variables
  firstNumber = result;
  console.log(`set firstNumber to ${result}`)
  secondNumber = undefined;
  storedOperator = undefined;
  console.log(`reset secondNumber and storedOperator`)
}



//Comma button
commaButton.addEventListener("click", (event) => {
  if (event.target.id === "comma" && displayNumber.textContent.includes(".")){
      return false;
  } else if (event.target.id === "comma" && displayNumber.textContent === "0"){
      displayNumber.textContent = "0.";
  } else {
      displayNumber.textContent += ".";
  }
})

//Prefix button
prefixButton.addEventListener("click", () => {
  console.log(displayNumber.textContent)
  if (displayNumber.textContent === "0"){
    console.log("a");
    return false;
  } else if (displayNumber.textContent[0] != "-" && !isNaN(parseFloat(displayNumber.textContent))){
    console.log("minus added");
    displayNumber.textContent = "-" + displayNumber.textContent;
  } else if (Number.isNaN(parseFloat(displayNumber.textContent[0])) && displayNumber.textContent !== undefined){
    console.log("minus removed");
    console.log(displayNumber.textContent)
    console.log(Number.isNaN(parseFloat(displayNumber.textContent[0])))
    displayNumber.textContent = displayNumber.textContent.slice(1);
    console.log(displayNumber.textContent)
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
