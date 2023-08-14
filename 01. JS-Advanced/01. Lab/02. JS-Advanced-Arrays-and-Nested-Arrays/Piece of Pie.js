function solve(collection, firstString, secondString) {
  let startIndex = collection.indexOf(firstString);
  let endIndex = collection.indexOf(secondString);
  let pieArray = collection.slice(startIndex, endIndex + 1);
  return pieArray;
}
solve(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);
