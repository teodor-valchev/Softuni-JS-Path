function storage(input) {
  input.sort((a, b) => a.localeCompare(b));
  let char = "";
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    if (char != element[0]) {
      char = element[0];
      console.log(char);
    }
    let splited = element.split(" : ");

    console.log(`  ${splited[0]}: ${splited[1]}`);
  }
}
storage([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
