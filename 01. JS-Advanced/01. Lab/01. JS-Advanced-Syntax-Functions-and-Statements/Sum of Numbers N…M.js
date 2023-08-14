function add(firstNumber, secondNumber) {
  let firstNumParsed = Number(firstNumber);
  let secondNumParsed = Number(secondNumber);
  let result = 0;
  for (let i = firstNumParsed; i <= secondNumParsed; i++) {
    result += i;
  }
  console.log(result);
}
add("-8", "20");
