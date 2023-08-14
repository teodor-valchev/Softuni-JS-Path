function solve() {
  let text = document.getElementById("input").value;
  let output = document.getElementById("output");
  let split = text.split(".").filter((s) => s !== "");

  while (split.length > 0) {
    let text = split.slice(0, 3).join(". ") + ".";
    let p = document.createElement("p");
    p.textContent = text;
    output.appendChild(p);
  }
  console.log(split);
}
