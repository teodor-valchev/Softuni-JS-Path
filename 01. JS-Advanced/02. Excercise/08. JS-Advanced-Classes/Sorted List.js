class List {
  constructor() {
    this.numbers = [];
    this.size = this.numbers.length;
    this.numbers.sort((a, b) => a + b);
  }

  add(number) {
    return this.numbers.push(Number(number));
  }
  remove(index) {
    if (index > this.numbers.length || index < 0) {
      throw new Error("Invalid Index");
    }
    return this.numbers.splice(index, 1);
  }
  get(index) {
    if (index > this.numbers.length || index < 0) {
      throw new Error("Invalid Index");
    }
    return this.numbers[index];
  }
  size() {
    return this.numbers.length;
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
