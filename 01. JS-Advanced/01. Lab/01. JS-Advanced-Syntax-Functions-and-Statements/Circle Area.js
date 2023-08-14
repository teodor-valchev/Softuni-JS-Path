function circleArea(input) {
  let check = typeof input;

  if (check == "string") {
    console.log(
      "We can not calculate the circle area, because we receive a " +
        check +
        "."
    );
  } else if (check == "number") {
    let area = Math.pow(input, 2) * Math.PI;
    console.log(area.toFixed(2));
  }
}
circleArea(5);
