const calculatorScreen = document.querySelector(".calculator-screen");
const leftSideButtons = document.querySelector(".left-side-buttons");
const rightSideButtons = document.querySelector(".right-side-buttons");

const buttonLabelsLeft = [
    "7", "8", "9",
    "4", "5", "6",
    "1", "2", "3",
    "0", ".", 
];

buttonLabelsLeft.forEach(label => {
    button = document.createElement("button");
    button.className = "button";
    button.textContent = label;
    leftSideButtons.appendChild(button);
}); 

const buttonLabelsRight = [
    "Del", "CE",
    "X", "/",
    "+", "-",
    "=",
];

buttonLabelsRight.forEach(label => {
    button = document.createElement("button");
    button.className = "button";
    button.textContent = label;
    rightSideButtons.appendChild(button);
}); 