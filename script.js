let firstInput = "";
let operandInput = "";
let secondInput = "";
let result; 

const calculatorScreen = document.querySelector(".calculator-screen");
const display = document.createElement("p");
display.className = "input";
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
            display.textContent = `${firstInput} ${operandInput} ${secondInput}`;

        } else if (firstInput !== "" && operandInput !== "") { 
            secondInput += `${label}`;
            display.textContent = `${firstInput} ${operandInput} ${secondInput}`;
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

clearButton.addEventListener("click", clear);
clearButton.addEventListener("click", () =>
    display.textContent = `${firstInput} ${operandInput} ${secondInput}`);

const buttonLabelsBottomRight = [
    "*", "/",
    "+", "-",
];

buttonLabelsBottomRight.forEach(label => {
   let button = document.createElement("button");
    button.className = "button";
    button.textContent = label;
    rightSideButtons.appendChild(button);
    button.addEventListener("click", operateWhenClickingAnotherOperator);
    button.addEventListener("click", () => 
        {if (firstInput == "") { return;
            
        } else {operandInput = label};
    });

    button.addEventListener("click", () =>
        display.textContent = `${firstInput} ${operandInput} ${secondInput}`);
}); 

const operateButton = document.createElement("button");
operateButton.textContent = "=";
operateButton.className = "button";
rightSideButtons.appendChild(operateButton);
operateButton.addEventListener("click", operate);
operateButton.addEventListener("click", () =>
        display.textContent = result);

function add (a, b) {
  return parseFloat(a) + parseFloat(b);

};

function subtract (a, b) {
    return parseFloat(a) - parseFloat(b);
};

function multiply (a, b) {
    return parseFloat(a) * parseFloat(b);
};

function divide (a, b) {
     return parseFloat(a) / parseFloat(b);
};

function operate () {
  if (operandInput == "/" && firstInput !== "" && secondInput === "0") { 
    result = "You thought you did something huh?";
    firstInput = "";
    operandInput = "";
    secondInput = "";
    return result;
  } else if (operandInput == "+" && firstInput !== "" && secondInput !== "") { 
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

  } 
};

function operateWhenClickingAnotherOperator() {
    if (operandInput !== "" && firstInput !== "" && secondInput !== "") {
        operate();
        firstInput = result;
        display.textContent = `${result} ${operandInput}`;
    }
}

function clear() {
    firstInput = "";
    operandInput = "";
    secondInput = "";
    result = "";
}