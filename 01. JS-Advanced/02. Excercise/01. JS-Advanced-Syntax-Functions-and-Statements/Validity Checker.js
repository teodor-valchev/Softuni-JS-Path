function check(numOne, numTwo, numThree, numFour) {
  let collection = [numOne, numTwo, numThree, numFour];

  function firstComapre(x1, y1) {
    let res = Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2);
    res = Math.sqrt(res);
    if (Number.isInteger(res)) {
      console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
      console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
  }

  function secondComapre(x2, y2) {
    let res = Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2);
    res = Math.sqrt(res);
    if (Number.isInteger(res)) {
      console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
      console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
  }

  function thirdCompare(x1, y1, x2, y2) {
    let res = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
    res = Math.sqrt(res);
    if (Number.isInteger(res)) {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
  }

  for (let i = 0; i < collection.length; i += 4) {
    let x1 = Number(numOne);
    let x2 = Number(numThree);
    let y1 = Number(numTwo);
    let y2 = Number(numFour);
    firstComapre(x1, y1);
    secondComapre(x2, y2);
    thirdCompare(x1, y1, x2, y2);
  }
}

check(2, 1, 1, 1);
