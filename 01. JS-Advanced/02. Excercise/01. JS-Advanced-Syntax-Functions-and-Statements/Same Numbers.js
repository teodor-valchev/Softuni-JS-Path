function repeatedNumber(input) {
  let isSame = true;
  let NuminString = input.toString();
  let sum = 0;

  for (let i = 0; i < NuminString.length; i++) {
    let currentNum = NuminString[0];
    sum += Number(NuminString[i]);

    if (currentNum !== NuminString[i]) {
      isSame = false;
    }
  }
  console.log(isSame);
  console.log(sum);
}
repeatedNumber(1234);
