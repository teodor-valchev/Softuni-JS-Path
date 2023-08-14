function rotate(collection, rotations) {
  for (let i = 0; i < rotations; i++) {
    let lastElement = collection.pop();
    collection.unshift(lastElement);
  }
  console.log(collection.join(" "));
}
rotate(["1", "2", "3", "4"], 2);
