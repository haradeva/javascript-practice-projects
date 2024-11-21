const inputDisplay = document.getElementById("display");

function toDisplay(userInput) {
  inputDisplay.value += userInput;
}

function clearDisplay() {
  inputDisplay.value = "";
}

function calculate() {
  try {
    inputDisplay.value = eval(inputDisplay.value);
  } catch (error) {
    inputDisplay.value = "ERROR";
  }
}
