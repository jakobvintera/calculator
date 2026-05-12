const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
let displayNumber = document.querySelector("#displayNumber");
const historyPanel = document.querySelector(".historyPanel");
let firstNumber;
let secondNumber;
let operator;


// zahl, zahl, zahl number concat bis user operator drückt, dann store in firstNumber (falls firstNumber leer ist) dann zahl, zahl, zahl number concat bis user operator oder = drückt, dann store in secondNumber(falls firstNumber voll ist) und ausrechnen, result bei display und historyPanel anzeigen, dann wird secondNumber zu firstNumber, falls dann eine zahl eingegeben wird wird sie in secondNumber gespeichert


function concatNumber(number){
  if (displayNumber.textContent == "0") {
    displayNumber.textContent = number;
  } else {
    displayNumber.textContent += number;
  }}

// Button Input Listener
for (button of buttons){
  button.addEventListener("click", (event) => {
      let input = event.target.textContent;
      concatNumber(input);
  })
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
