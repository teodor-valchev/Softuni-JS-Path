function solve(input) {
  let totalSum = 0;
  let inverseValue = 0;
  let concat = "";
  for (let i = 0; i < input.length; i++) {
    let num = Number(input[i]);
    totalSum += num;
    inverseValue += 1 / num;
    concat += num;
  }
  console.log(totalSum);
  console.log(inverseValue);
  console.log(concat);
}
solve([2, 4, 8, 16]);
