const calculatorScreen = document.querySelector(".calculator-screen");
const leftSideButtons = document.querySelector(".left-side-buttons");
const rightSideButtons = document.querySelector(".right-side-buttons");

let firstInput = "";
let operandInput = "";
let secondInput = "";
let result; 

let userInput = [firstInput, operandInput, secondInput];


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
        if (operandInput == "") { firstInput += `${label}`;
    
        } else if (firstInput !== "" && operandInput !== "") { secondInput += `${label}`;
    
        };
    });
});

const buttonLabelsTopRight = [
    "Del", "CE",
];

buttonLabelsTopRight.forEach(label => {
   let button = document.createElement("button");
    button.className = "button";
    button.textContent = label;
    rightSideButtons.appendChild(button);

}); 

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
}); 

const operateButton = document.createElement("button");
operateButton.textContent = "=";
operateButton.className = "button";
rightSideButtons.appendChild(operateButton);
operateButton.addEventListener("click", operate);

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