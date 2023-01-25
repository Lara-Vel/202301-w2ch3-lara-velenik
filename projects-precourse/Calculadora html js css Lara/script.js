const numbersButtons = document.getElementsByName("number");
const operationsButtons = document.getElementsByName("operation");
const equalButton = document.getElementsByName("equal")[0];
const deleteButton = document.getElementsByName("clear-all")[0];
let result = document.getElementById("result");
let currentOperation = "";
let previusOperation = "";
let operations = undefined;

numbersButtons.forEach(function (button) {
  button.addEventListener("click", () => {
    addNumber(button.innerText);
  });
});

operationsButtons.forEach(function (button) {
  button.addEventListener("click", () => {
    selectOperation(button.innerText);
  });
});

equalButton.addEventListener("click", () => {
  calculate();
  refreshDisplay();
});

deleteButton.addEventListener("click", () => {
  clearAll();
  refreshDisplay();
});

const selectOperation = (operation) => {
  if (operation === "") return;
  if (previusOperation !== "") {
    calculate();
  }
  operations = operation.toString();
  previusOperation = currentOperation;
  currentOperation = "";
};

const calculate = () => {
  let calculation;
  const previusValue = parseFloat(previusOperation);
  const currentValue = parseFloat(currentOperation);
  if (isNaN(previusValue) || isNaN(currentValue)) return;
  switch (operations) {
    case "+":
      calculation = previusValue + currentValue;
      break;
    case "-":
      calculation = previusValue - currentValue;
      break;
    case "*":
      calculation = previusValue * currentValue;
      break;
    case "/":
      calculation = previusValue / currentValue;
      break;
    case ".":
      calculation = previusValue.currentValue.toFixed(3);
      break;
    default:
      return;
  }
  currentOperation = calculation;
  operations = undefined;
  previusOperation = "";
};

const addNumber = (number) => {
  currentOperation = currentOperation.toString() + number.toString();
  refreshDisplay();
};

const clearAll = () => {
  currentOperation = "";
  previusOperation = "";
  operations = undefined;
};

const refreshDisplay = () => {
  result.value = currentOperation;
};

clearAll();
