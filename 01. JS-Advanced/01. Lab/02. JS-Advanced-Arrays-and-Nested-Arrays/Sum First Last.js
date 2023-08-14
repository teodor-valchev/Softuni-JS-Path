function sumFirstNumberWithLast(input) {
  let firstNumber = Number(input.shift());
  let lastNumber = Number(input.pop());
  console.log(firstNumber + lastNumber);
}

sumFirstNumberWithLast(["5", "10"]);
