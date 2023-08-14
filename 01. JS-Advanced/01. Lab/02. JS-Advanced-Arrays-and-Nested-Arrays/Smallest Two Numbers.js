function smallestNumbersInArray(input) {
  input.sort((a, b) => a - b);
  let result = [];
  result.push(input[0]);
  result.push(input[1]);

  console.log(result.join(" "));
}

smallestNumbersInArray([3, 0, 10, 4, 7, 3]);
