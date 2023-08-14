function create(words) {
  let wordsInput = words;
  let container = document.getElementById("content");

  for (const word of words) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.style.display = "none";
    p.textContent = word;
    div.appendChild(p);
    div.addEventListener("click", showText);
    container.appendChild(div);
  }
  function showText(ev) {
    let p = ev.target.children[0];
    p.style.display = "block";
  }
}
