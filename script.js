const numButtons = document.querySelectorAll(".numbers button");
//const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
let displayNumber = document.querySelector("#displayNumber");
const historyPanel = document.querySelector(".historyPanel");
let firstNumber;
let secondNumber;
let operator;


// zahl, zahl, zahl number concat bis user operator drückt, dann store in firstNumber (falls firstNumber leer ist) dann zahl, zahl, zahl number concat bis user operator oder = drückt, dann store in secondNumber(falls firstNumber voll ist) und ausrechnen, result bei display und historyPanel anzeigen, dann wird secondNumber zu firstNumber, falls dann eine zahl eingegeben wird wird sie in secondNumber gespeichert




function calculateResult(firstNumber, secondNumber, operator){

}



// Number Button Input Listener
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
        concatNumber(input);}
  })
}


//Number Assembler
function concatNumber(number){
  if (displayNumber.textContent === "0") {
    displayNumber.textContent = number;
  } else if (displayNumber.textContent.length === 15){
      return false;
  } else {
    displayNumber.textContent += number;
  }
}

/*

  if (event.target.id === "zero"){
    let input = 0;
    console.log(input);
    concatNumber(input);
  }

  if (event.target.id === "comma")
  if (event.target.id === "prefix")
 */
