function lowestPrice(input) {
  let prices = [];
  while (input.length > 0) {
    let [townName, product, price] = input.shift().split(" | ");

    if (prices.filter((x) => x.product === product).length > 0) {
      let obj = prices.find((x) => x.product === product);
      if (obj.price > Number(price)) {
        obj.price = Number(price);
        obj.townName = townName;
      }
    } else {
      let obj = { product, townName, price: Number(price) };
      prices.push(obj);
    }
  }

  for (const price of prices) {
    console.log(`${price.product} -> ${price.price} (${price.townName})`);
  }
}
lowestPrice([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
