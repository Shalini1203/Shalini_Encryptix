let display = document.getElementById("display");
let buttons = document.querySelectorAll(".button-grid button");
let calculator = {
  num1: "",
  num2: "",
  operator: "",
  result: "",
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.textContent;
    if (buttonText === "C") {
      calculator.num1 = "";
      calculator.num2 = "";
      calculator.operator = "";
      calculator.result = "";
      display.value = "";
    } else if (buttonText === "⌫") {
      if (calculator.num1) {
        calculator.num1 = calculator.num1.slice(0, -1);
        display.value = calculator.num1;
      }
    } else if (buttonText === "=") {
      if (calculator.num1 && calculator.num2 && calculator.operator) {
        calculator.result = calculate(calculator.num1, calculator.num2, calculator.operator);
        display.value = calculator.result;
        calculator.num1 = "";
        calculator.num2 = "";
        calculator.operator = "";
      }
    } else if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
      if (calculator.num1) {
        calculator.operator = buttonText;
        display.value += buttonText;
      }
    } else {
      if (calculator.operator) {
        calculator.num2 += buttonText;
        display.value += buttonText;
      } else {
        calculator.num1 += buttonText;
        display.value += buttonText;
      }
    }
  });
});

function calculate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Error";
  }
}