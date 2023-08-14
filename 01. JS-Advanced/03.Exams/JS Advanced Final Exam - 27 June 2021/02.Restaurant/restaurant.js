class Restaurant {
  meals = [];
  prices = [];
  productsNames = [];
  constructor(budgetMoney) {
    this.budgetMoney = budgetMoney;
    this.menu = {};
    this.stockProducts = {};
    this.history = {};
  }

  loadProducts(products) {
    let result = [];
    for (const product of products) {
      let splitedProducts = product.split(" ");
      let productName = splitedProducts[0];
      let productQuantity = Number(splitedProducts[1]);
      let productTotalPrice = Number(splitedProducts[2]);
      if (this.budgetMoney > productTotalPrice) {
        this.budgetMoney = this.budgetMoney - productTotalPrice;

        if (this.stockProducts.productName == productName) {
          this.stockProducts.productQuantity += productQuantity;
        }
        this.productsNames.push([productName, productQuantity]);
        this.stockProducts = {
          allStock: this.productsNames,
        };

        result.push(`Successfully loaded ${productQuantity} ${productName}`);
      } else {
        result.push(
          `There was not enough money to load ${productQuantity} ${productName}`
        );
      }
    }
    return result.join("\n");
  }
  addToMenu(meal, neededProducts, price) {
    let productsOfArray = [];
    let newMeal = false;
    if (!this.menu[meal]) {
      for (const product of neededProducts) {
        let [productName, productQuantity] = product.split(" ");
        let products = {
          productName,
          productQuantity,
        };
        productsOfArray.push(products);
        newMeal = true;
      }
      this.meals.push(meal);
      this.prices.push(price);
      this.menu = {
        meals: this.meals,
        allPrices: this.prices,
        mealProducts: productsOfArray,
      };
    } else {
      newMeal = false;
      return `The ${meal} is already in the our menu, try something different.`;
    }
    if (newMeal == true) {
    }
    if (this.meals.length == 1) {
      return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
    } else if (
      this.meals.length == 0 ||
      this.meals.length == 2 ||
      this.meals.length > 2
    ) {
      return `Great idea! Now with the ${meal} we have ${this.meals.length} meals in the menu, other ideas?`;
    }
  }
  showTheMenu() {
    if (this.meals.length > 0) {
      let result = [];
      this.meals.forEach((x, index) =>
        result.push(`${x} - $ ${this.prices[index]}`)
      );
      return result.join("\n");
    }
    return "Our menu is not ready yet, please come later...";
  }
  makeTheOrder(meal) {
    if (!this.meals.includes(meal)) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }
    let productsNeeded = this.productsNames.map((x) => x[0]);
    let values = Object.values(this.menu);
    let maped = values[2].map((x) => x.productName);
    let serveMeal = false;
    
    while (productsNeeded.length != 0 && maped.length!=0) {
      let inStock = productsNeeded.pop();
      let inMenu = maped.pop();

      if (inStock==inMenu) {
        serveMeal = true
      }
      else{
        serveMeal = false
      }
    }
    if (serveMeal ==true) {
      return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.prices[0]}.`
    }
    else{
      return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
    }
  }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts([
  "Yogurt 30 3",
  "Honey 50 4",
  "Strawberries 20 10",
  "Banana 5 1",
]);
kitchen.addToMenu(
  "frozenYogurt",
  ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
  9.99
);
console.log(kitchen.makeTheOrder("frozenYogurt"));
