function sorted(collection) {
  let sortedArr = collection.sort((a, b) => a.localeCompare(b));
  let count = 0;
  sortedArr.forEach((name) => {
    console.log(`${++count}.${name}`);
  });
}
sorted(["John", "Bob", "Christina", "Ema"]);
