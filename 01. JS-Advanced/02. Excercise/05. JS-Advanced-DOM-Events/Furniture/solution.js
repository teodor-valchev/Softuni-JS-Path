function solve() {
  let textAreasElements = document.querySelectorAll("textarea");
  let buttonElements = document.getElementsByTagName("button");
  let tbodyElement = document.querySelector("tbody");
  let checkbox = document.querySelector("input[type='checkbox']");
  checkbox.disabled = false;
  let generateBtn = buttonElements[0];
  let buyButton = buttonElements[1];
  generateBtn.addEventListener("click", addItemsToTable);
  buyButton.addEventListener("click", buy);

  function buy(ev) {
    let allElementsCheckBoxes = Array.from(
      document.querySelectorAll("input[type='checkbox']")
    );
    let checkedElemnts = allElementsCheckBoxes.filter((c) => c.checked);
    let names = [];
    let totalPrice = [];
    let avg = [];

    for (const cb of checkedElemnts) {
      let name = cb.parentNode.parentNode.children[1].textContent;
      let price = cb.parentNode.parentNode.children[2].textContent;
      let avgDec = cb.parentNode.parentNode.children[3].textContent;
      avg.push(avgDec);
      totalPrice.push(price);
      names.push(name);
    }
    let output = textAreasElements[1];
    let foramted = totalPrice.reduce(
      (prev, next) => Number(prev) + Number(next)
    );
    let totalavg =
      avg.reduce((prev, next) => Number(prev) + Number(next)) / avg.length;
    output.textContent += `Bought furniture: ${names.join(", ")}\n`;
    output.textContent += `Total price: ${foramted.toFixed(2)}\n`;
    output.textContent += `Average decoration factor: ${totalavg}`;
  }

  function addItemsToTable() {
    let input = textAreasElements[0];
    currentInput = JSON.parse(input.value);

    for (const furrObj in currentInput) {
      let newTableRowElement = document.createElement("tr");
      let imgTd = document.createElement("td");
      let img = document.createElement("img");
      img.src = currentInput[furrObj].img;
      imgTd.appendChild(img);
      newTableRowElement.appendChild(imgTd);
      tbodyElement.appendChild(newTableRowElement);

      let nameTd = document.createElement("td");
      let p = document.createElement("p");
      p.textContent = currentInput[furrObj].name;
      nameTd.appendChild(p);
      newTableRowElement.appendChild(nameTd);

      let priceTd = document.createElement("td");
      p = document.createElement("p");
      p.textContent = currentInput[furrObj].price;
      priceTd.appendChild(p);
      newTableRowElement.appendChild(priceTd);

      let decorTd = document.createElement("td");
      p = document.createElement("p");
      p.textContent = currentInput[furrObj].decFactor;
      decorTd.appendChild(p);
      newTableRowElement.appendChild(decorTd);

      let checkBoxTd = document.createElement("td");
      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkBoxTd.appendChild(checkbox);
      newTableRowElement.appendChild(checkBoxTd);
    }
  }
}
