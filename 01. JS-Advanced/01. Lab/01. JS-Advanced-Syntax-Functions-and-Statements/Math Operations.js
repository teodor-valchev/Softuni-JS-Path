function calculator(firstNumber, secondNumber, operator) {
  let result;
  if (operator == "+") {
    result = firstNumber + secondNumber;
  } else if (operator == "-") {
    result = firstNumber - secondNumber;
  } else if (operator == "*") {
    result = firstNumber * secondNumber;
  } else if (operator == "/") {
    result = firstNumber / secondNumber;
  } else if (operator == "%") {
    result = firstNumber % secondNumber;
  } else if (operator == "**") {
    result = firstNumber ** secondNumber;
  }
  console.log(result);
}
calculator(3, 5.5, "/");
