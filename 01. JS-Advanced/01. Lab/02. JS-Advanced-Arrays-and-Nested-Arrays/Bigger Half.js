function biggerHalf(input) {
  input.sort((a, b) => a - b);
  let middle = Math.floor(input.length / 2);
  let biggerHalf;
  if (middle % 2 == 0) {
    biggerHalf = input.slice(middle, input.length);
  } else {
    biggerHalf = input.slice(middle, input.length);
  }
  return biggerHalf;
}
biggerHalf([4, 7, 2, 5]);
