function tax(name, population, treasury) {
  let city = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      Math.floor((this.treasury += this.population * this.taxRate));
    },
    applyGrowth(percentage) {
      let increase = Math.floor((this.population * percentage) / 100);
      Math.floor((this.population += increase));
    },
    applyRecession(percentage) {
      let increase = Math.floor((this.population * percentage) / 100);
      this.population -= increase;
    },
  };
  return city;
}
tax("Tortuga", 7000, 15000);
