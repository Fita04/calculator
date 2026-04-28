let firstInput = "";
let operandInput = "";
let secondInput = "";
let result; 

let userInput = [firstInput, operandInput, secondInput];

const calculatorScreen = document.querySelector(".calculator-screen");
const display = document.createElement("p");
calculatorScreen.appendChild(display);

const leftSideButtons = document.querySelector(".left-side-buttons");
const rightSideButtons = document.querySelector(".right-side-buttons");

const buttonLabelsLeft = [
    "7", "8", "9",
    "4", "5", "6",
    "1", "2", "3",
    "0", ".", 
];

buttonLabelsLeft.forEach(label => {
    let button = document.createElement("button");
    button.className = "button";
    button.textContent = label;
    leftSideButtons.appendChild(button);
    button.addEventListener ("click", () => {
        if (operandInput == "") { 
            firstInput += `${label}`;
            display.textContent += label;

        } else if (firstInput !== "" && operandInput !== "") { 
            secondInput += `${label}`;
            display.textContent += label;
        };
    });
});

const deleteButton = document.createElement("button");
deleteButton.textContent = "Del";
deleteButton.className = "button";
rightSideButtons.appendChild(deleteButton);

const clearButton = document.createElement("button");
clearButton.textContent = "CE";
clearButton.className = "button";
rightSideButtons.appendChild(clearButton);

const buttonLabelsBottomRight = [
    "*", "/",
    "+", "-",
];

buttonLabelsBottomRight.forEach(label => {
   let button = document.createElement("button");
    button.className = "button";
    button.textContent = label;
    rightSideButtons.appendChild(button);
    button.addEventListener("click", () => 
        operandInput = label);
    button.addEventListener("click", () =>
        display.textContent += operandInput);
    button.addEventListener("click", operateWhenClickingAnotherOperator);
}); 

const operateButton = document.createElement("button");
operateButton.textContent = "=";
operateButton.className = "button";
rightSideButtons.appendChild(operateButton);
operateButton.addEventListener("click", operate);
operateButton.addEventListener("click", () =>
        display.textContent = result);

function add (a, b) {
    return parseInt(a) + parseInt(b);
};

function subtract (a, b) {
    return parseInt(a) - parseInt(b);
};

function multiply (a, b) {
    return parseInt(a) * parseInt(b);
};

function divide (a, b) {
     return parseInt(a) / parseInt(b);
};

function operate () {
  if (operandInput == "+" && firstInput !== "" && secondInput !== "") { 
    result = add(firstInput, secondInput);
    firstInput = "";
    operandInput = "";
    secondInput = "";
    return result;
    
  } else if (operandInput == "-" && firstInput !== "" && secondInput !== "") { 
    result = subtract(firstInput, secondInput);
    firstInput = "";
    operandInput = "";
    secondInput = "";
    return result;
    
  } else if (operandInput == "*" && firstInput !== "" && secondInput !== "") { 
    result = multiply(firstInput, secondInput);
    firstInput = "";
    operandInput = "";
    secondInput = "";
    return result;

  } else if (operandInput == "/" && firstInput !== "" && secondInput !== "") { 
    result = divide (firstInput, secondInput);
    firstInput = "";
    operandInput = "";
    secondInput = "";
    return result;

  };
};

function operateWhenClickingAnotherOperator() {
    if (operandInput !== "" && firstInput !== "" && secondInput !== "") {
        operate();
        display.textContent = result;
    }
}