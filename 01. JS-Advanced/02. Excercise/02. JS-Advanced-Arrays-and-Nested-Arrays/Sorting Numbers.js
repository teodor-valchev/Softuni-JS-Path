function sorting(input) {
  input.sort((a, b) => a - b);
  let newArray = [];

  while (input.length != 0) {
    newArray.push(input.shift());
    newArray.push(input.pop());
  }
  return newArray;
}

sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
