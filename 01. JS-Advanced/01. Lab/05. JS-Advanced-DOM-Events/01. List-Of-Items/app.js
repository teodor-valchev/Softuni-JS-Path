function addItem() {
  let input = document.querySelector("#newItemText").value;
  let newLiElement = document.createElement("li");
  newLiElement.textContent = input;
  let ulElement = document.querySelector("#items");
  ulElement.appendChild(newLiElement);
}
