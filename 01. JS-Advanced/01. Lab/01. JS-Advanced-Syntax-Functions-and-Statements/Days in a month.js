function solve(firstNumber, secondNumber) {
  var dt = new Date();
  var month = firstNumber;
  var year = secondNumber;
  daysInMonth = new Date(year, month, 0).getDate();
  console.log(daysInMonth);
}
solve(1, 2012);
