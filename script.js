const calculatorScreen = document.querySelector(".calculator-screen");
const leftSideButtons = document.querySelector(".left-side-buttons");
const rightSideButtons = document.querySelector(".right-side-buttons");

let firstInput = "";
let operandInput = "";
let secondInput = "";


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
    "=",
];

buttonLabelsBottomRight.forEach(label => {
   let button = document.createElement("button");
    button.className = "button";
    button.textContent = label;
    rightSideButtons.appendChild(button);
    button.addEventListener("click", () => operandInput = label);

}); 

function add (firstInput, secondInput) {
    return parseInt(firstInput) + parseInt(secondInput);
};

function subtract (firstInput, secondInput) {
    return parseInt(firstInput) - parseInt(secondInput);
};

function multiply (firstInput, secondInput) {
    return parseInt(firstInput) * parseInt(secondInput);
};

function divide (firstInput, secondInput) {
     return parseInt(firstInput) / parseInt(secondInput);
};

function operate (operandInput) {
    switch (operandInput) {
        case "+": add();
            
            break;
    
        case "-": subtract();
            break;

        case "*": multiply();
            break;

        case "/": divide();
            break;
    }
};