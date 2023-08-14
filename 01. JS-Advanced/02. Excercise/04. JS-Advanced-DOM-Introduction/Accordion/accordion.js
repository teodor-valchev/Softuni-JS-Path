function toggle() {
  let getMoreElemnt = document.querySelector(".button");
  let getText = document.getElementById("extra");

  if (getMoreElemnt.textContent == "More") {
    getMoreElemnt.textContent = "Less";
    getText.style.display = "block";
  } else if (getMoreElemnt.textContent == "Less") {
    getMoreElemnt.textContent = "More";
    getText.style.display = "none";
  }
}
