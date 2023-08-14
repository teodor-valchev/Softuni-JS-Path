function addItem() {
  let input = document.querySelector("#newItemText").value;
  let newLiElement = document.createElement("li");
  newLiElement.textContent = input;
  let ulElement = document.querySelector("#items");
  let deleteBtn = document.createElement("a");
  deleteBtn.textContent = "[Delete]";
  deleteBtn.href = "#";
  newLiElement.appendChild(deleteBtn);
  ulElement.appendChild(newLiElement);
  deleteBtn.addEventListener("click", Delete);

  function Delete() {
    newLiElement.remove();
  }
}
