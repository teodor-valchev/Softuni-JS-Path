function evenPositions(input) {
  let newColection = [];
  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i];
    if (i % 2 == 0) {
      newColection.push(currentElement);
    }
  }
  console.log(newColection.join(" "));
}

evenPositions(["20", "30", "40", "50", "60"]);
