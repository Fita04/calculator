let firstInput = "";
let operandInput = "";
let secondInput = "";
let result; 
let recentlyUpdated = "";

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
    "0"
];

buttonLabelsLeft.forEach(label => {
    let button = document.createElement("button");
    button.className = "button";
    button.textContent = label;
    leftSideButtons.appendChild(button);
    button.addEventListener ("click", () => {
        if (operandInput == "") { 
            firstInput += `${label}`;
            recentlyUpdated = "firstInput";
            display.textContent = `${firstInput} ${operandInput} ${secondInput}`;

        } else if (firstInput !== "" && operandInput !== "") { 
            secondInput += `${label}`;
            recentlyUpdated = "secondInput";
            display.textContent = `${firstInput} ${operandInput} ${secondInput}`;
        };
    });
});

const dotButton = document.createElement("button");
dotButton.textContent = ".";
dotButton.className = "button";
leftSideButtons.appendChild(dotButton);


dotButton.addEventListener ("click", () => {
        if (firstInput.split("").includes(".") == false && firstInput !== "" && secondInput == "" && operandInput == "") { 
            firstInput += ".";
            recentlyUpdated = "firstInput";
            display.textContent = `${firstInput} ${operandInput} ${secondInput}`;

        } else if (secondInput.split("").includes(".") == false && secondInput !== "" && operandInput !== "") { 
            secondInput += ".";
            recentlyUpdated = "secondInput";
            display.textContent = `${firstInput} ${operandInput} ${secondInput}`;
            

    }
    });

const deleteButton = document.createElement("button");
deleteButton.textContent = "Del";
deleteButton.className = "button";
rightSideButtons.appendChild(deleteButton);

deleteButton.addEventListener("click", deleteCharacter, 
    () => display.textContent = `${firstInput} ${operandInput} ${secondInput}`);

const clearButton = document.createElement("button");
clearButton.textContent = "AC";
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
            
        } else {
        operandInput = label;
        recentlyUpdated = "operandInput";
        };
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
        display.textContent = parseFloat(result.toFixed(5)));

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
    recentlyUpdated = "";
    return result;
  } else if (operandInput == "+" && firstInput !== "" && secondInput !== "") { 
    result = add(firstInput, secondInput);
    firstInput = "";
    operandInput = "";
    secondInput = "";
    recentlyUpdated = "";
    return result;
    
  } else if (operandInput == "-" && firstInput !== "" && secondInput !== "") { 
    result = subtract(firstInput, secondInput);
    firstInput = "";
    operandInput = "";
    secondInput = "";
    recentlyUpdated = "";
    return result;
    
  } else if (operandInput == "*" && firstInput !== "" && secondInput !== "") { 
    result = multiply(firstInput, secondInput);
    firstInput = "";
    operandInput = "";
    secondInput = "";
    recentlyUpdated = "";
    return result;

  } else if (operandInput == "/" && firstInput !== "" && secondInput !== "") { 
    result = divide (firstInput, secondInput);
    firstInput = "";
    operandInput = "";
    secondInput = "";
    recentlyUpdated = "";
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
    recentlyUpdated = "";
}

function deleteCharacter () {
    if (recentlyUpdated === "firstInput") { 
        firstInput = firstInput.split("").slice(0, -1).join("");
        display.textContent = `${firstInput} ${operandInput} ${secondInput}`;
        
        
    } else if (recentlyUpdated === "operandInput") {
        operandInput = operandInput.split("").slice(0, -1).join("");
        display.textContent = `${firstInput} ${operandInput} ${secondInput}`;
        if (operandInput === "") { 
            recentlyUpdated = "firstInput";
        }

    } else if (recentlyUpdated === "secondInput") {
       secondInput = secondInput.split("").slice(0, -1).join("");
        display.textContent = `${firstInput} ${operandInput} ${secondInput}`;
        if (secondInput === "") { 
            recentlyUpdated = "operandInput";
        }
    }
}