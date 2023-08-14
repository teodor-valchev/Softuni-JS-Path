function largestNumber(firstNumber, secondNumber, thirdNumber) {
  let result;

  if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    result = firstNumber;
  } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    result = secondNumber;
  } else if (thirdNumber > firstNumber && thirdNumber > firstNumber) {
    result = thirdNumber;
  }
  console.log("The largest number is " + result + ".");
}
largestNumber(5, -3, 16);
