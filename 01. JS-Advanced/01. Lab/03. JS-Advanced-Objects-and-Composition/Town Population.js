function populatin(input) {
  let towns = {};

  for (const info of input) {
    let arrayInfo = info.split(" <-> ");
    let town = arrayInfo[0];
    let population = Number(arrayInfo[1]);

    if (!towns[town]) {
      towns[town] = 0;
    }
    towns[town] += population;
  }

  for (const town in towns) {
    console.log(`${town} : ${towns[town]}`);
  }
}
populatin([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
