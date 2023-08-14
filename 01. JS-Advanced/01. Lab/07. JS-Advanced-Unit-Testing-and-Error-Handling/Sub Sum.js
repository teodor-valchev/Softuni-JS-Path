function sum(numbers, start, end) {
  if (!Array.isArray(numbers)) {
    return NaN;
  }
  let startIndex = Math.max(start, 0);
  let endIndex = Math.min(end, numbers.length - 1);

  let sum = numbers
    .slice(startIndex, endIndex + 1)
    .reduce((a, b) => a + Number(b), 0);
  return sum;
}

sum([10, 20, 30, 40, 50, 60], 3, 300);
