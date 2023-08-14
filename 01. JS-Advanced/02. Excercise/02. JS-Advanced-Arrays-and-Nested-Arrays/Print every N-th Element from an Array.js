function solve(collection, number) {
  let newArray = [];
  newArray.unshift(collection[0]);
  let counter = 0;

  for (let i = 1; i < collection.length; i++) {
    counter++;
    if (number == counter) {
      newArray.push(collection[i]);
      counter = 0;
    }
  }
  return newArray;
}
solve(["5", "20", "31", "4", "20"], 2);
