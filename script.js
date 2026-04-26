const calculatorScreen = document.querySelector(".calculator-screen");

const leftSideButtons = document.querySelector(".left-side-buttons");
const leftButtonsWidth = leftSideButtons.style.height = "800px";
const leftButtonsHeight = leftSideButtons.style.height = "680px";

const rightSideButtons = document.querySelector(".right-side-buttons");
const rightButtonsWidth = rightSideButtons.style.height = "800px";
const rightButtonsHeight = rightSideButtons.style.height = "680px";

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
}); 

const buttonLabelsRight = [
    "Del", "CE",
    "X", "/",
    "+", "-",
    "=",
];

buttonLabelsRight.forEach(label => {
   let button = document.createElement("button");
    button.className = "button";
    button.textContent = label;
    rightSideButtons.appendChild(button);
}); 