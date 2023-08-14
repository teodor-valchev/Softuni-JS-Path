class ChristmasDinner {
  constructor(budget) {
    if (budget < 0) {
      throw new Error("The budget cannot be a negative number");
    }
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  shopping(input) {
    let product = input[0];
    let price = input[1];
    if (price > this.budget) {
      throw new Error("Not enough money to buy this product");
    }
    this.budget -= price;
    this.products.push(product);
    return `You have successfully bought ${product}!`;
  }

  recipes(input) {
    let recipeName = input.recipeName;
    let productList = input.productsList;

    for (const product of productList) {
      if (!this.products.includes(product)) {
        throw new Error("We do not have this product");
      }
    }
    let products = {
      recipeName,
      productList,
    };
    this.dishes.push(products);
    return `${recipeName} has been successfully cooked!`;
  }
  inviteGuests(name, dish) {
    let serchedDish = this.dishes.find((x) => x.recipeName == dish);
    if (!serchedDish) {
      throw new Error("We do not have this dish");
    }
    if (this.guests[name]) {
      throw new Error("This guest has already been invited");
    }
    this.guests[name] = dish;
    return `You have successfully invited ${name}!`;
  }
  showAttendance() {
   
}
}

let dinner = new ChristmasDinner(200);

dinner.shopping(["Salt", 1]);
dinner.shopping(["Beans", 3]);
dinner.shopping(["Cabbage", 4]);
dinner.shopping(["Rice", 2]);
dinner.shopping(["Savory", 1]);
dinner.shopping(["Peppers", 1]);
dinner.shopping(["Fruits", 40]);
dinner.shopping(["Honey", 10]);

dinner.recipes({
  recipeName: "Oshav",
  productsList: ["Fruits", "Honey"],
});
dinner.recipes({
  recipeName: "Folded cabbage leaves filled with rice",
  productsList: ["Cabbage", "Rice", "Salt", "Savory"],
});
dinner.recipes({
  recipeName: "Peppers filled with beans",
  productsList: ["Beans", "Peppers", "Salt"],
});

dinner.inviteGuests("Ivan", "Oshav");
dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice");
dinner.inviteGuests("Georgi", "Peppers filled with beans");

console.log(dinner.showAttendance());
