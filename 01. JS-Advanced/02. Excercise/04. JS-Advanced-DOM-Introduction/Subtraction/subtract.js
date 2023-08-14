function subtract() {
  let getFirstNumber = document.getElementById("firstNumber").value;
  let getsecondNumber = document.getElementById("secondNumber").value;
  let sum = getFirstNumber - getsecondNumber;
  let restultElement = document.getElementById("result");
  restultElement.textContent = sum;
}
