function divisor(firstNum, secondNum) {
  let first = Number(firstNum);
  let second = Number(secondNum);

  while (first !== second) {
    if (first > second) {
      first -= second;
    } else {
      second -= first;
    }
  }
  console.log(first);
}
divisor(2154, 458);
