function solve(collection) {
  let newArray = [];
  let isEmpty = true;

  for (let i = 0; i < collection.length; i++) {
    let currentCommand = collection[i];

    if (currentCommand == "add") {
      newArray.push(i + 1);
      isEmpty = false;
    } else if (currentCommand == "remove") {
      newArray.pop();
    }
  }
  if (newArray.length > 0) {
    isEmpty = false;
  }

  if (isEmpty == true) {
    console.log("Empty");
  } else {
    newArray.forEach((x) => console.log(x));
  }
}

solve(["add", "add", "add", "add"]);
