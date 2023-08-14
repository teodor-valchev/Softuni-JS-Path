function cookingNumber(
  numberInput,
  firstCommand,
  secondCommand,
  thirdCommand,
  fourthCommand,
  fifthCommnd
) {
  let number = Number(numberInput);
  let collection = [
    firstCommand,
    secondCommand,
    thirdCommand,
    fourthCommand,
    fifthCommnd,
  ];

  function chop() {
    return number / 2;
  }
  function dice() {
    return Math.sqrt(number);
  }
  function spice() {
    return (number += 1);
  }
  function bake() {
    return (number *= 3);
  }
  function fillet() {
    let numberIn20Precent = number * 0.2;
    return number - numberIn20Precent;
  }

  for (let i = 0; i < collection.length; i++) {
    let currentCommand = collection[i];

    if (currentCommand === "chop") {
      number = chop();
      console.log(number);
    } else if (currentCommand === "dice") {
      number = dice();
      console.log(number);
    } else if (currentCommand === "spice") {
      number = spice();
      console.log(number);
    } else if (currentCommand === "bake") {
      number = bake();
      console.log(number);
    } else if (currentCommand === "fillet") {
      number = fillet();
      console.log(number);
    }
  }
}

cookingNumber("9", "dice", "spice", "chop", "bake", "fillet");
