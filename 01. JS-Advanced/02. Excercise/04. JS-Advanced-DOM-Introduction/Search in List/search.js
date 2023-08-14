function search() {
  let getTowns = Array.from(document.querySelectorAll("#towns li"));
  let serchedBox = document.getElementById("searchText").value;
  let result = document.getElementById("result");
  let index = 0;

  for (const town of getTowns) {
    if (town.textContent.includes(serchedBox)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      index++;
    } else {
      town.style.fontWeight = "normal";
      town.style.textDecoration = "none";
    }
  }
  result.textContent = `${index} matches found`;
}
