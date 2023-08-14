function fruitMoney(fruit, weight, number) {
  let typeFruit = fruit;
  let weightInGrams = weight;
  let pricePerKg = number;
  let weightResult = weightInGrams / 1000;
  let money = (weight * pricePerKg) / 1000;
  console.log(
    `I need $${money.toFixed(2)} to buy ${weightResult.toFixed(
      2
    )} kilograms ${typeFruit}.`
  );
}
fruitMoney("apple", 1563, 2.35);
