function calories(input) {
  let food = {};

  for (let i = 0; i < input.length; i += 2) {
    let name = input[i];
    let calories = Number(input[i + 1]);
    food[name] = calories;
  }
  console.log(food);
}
calories(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
