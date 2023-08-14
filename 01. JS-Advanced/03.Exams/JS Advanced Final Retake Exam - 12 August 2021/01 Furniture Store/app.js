window.addEventListener("load", solve);

function solve() {
  const modelElement = document.getElementById("model");
  const yearElement = document.getElementById("year");
  const descriptionElement = document.getElementById("description");
  const priceElement = document.getElementById("price");
  const addBtn = document.getElementById("add");
  const table = document.getElementById("furniture-list");
  var totalPriceElement = document.querySelector(".total-price");

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let model = modelElement.value;
    let year = yearElement.value;
    let description = descriptionElement.value;
    let price = priceElement.value;
    if (model == "" || description == "") {
      return;
    }
    if (year < 0 || price < 0) {
      return;
    }

    let tr = document.createElement("tr");
    tr.className = "info";
    let modelTd = document.createElement("td");
    let priceTd = document.createElement("td");

    modelTd.textContent = model;
    priceTd.textContent = Number(price).toFixed(2);

    let actionsTd = document.createElement("td");
    let moreInfoButton = document.createElement("button");
    let buyItBtn = document.createElement("button");

    moreInfoButton.className = "moreBtn";
    moreInfoButton.textContent = "More Info";
    buyItBtn.className = "buyBtn";
    buyItBtn.textContent = "Buy it";
    actionsTd.appendChild(moreInfoButton);
    actionsTd.appendChild(buyItBtn);

    let hideInfoTr = document.createElement("tr");
    hideInfoTr.className = "hide";
    let yearTd = document.createElement("td");
    yearTd.textContent = `Year: ${year}`;
    let descriptionTd = document.createElement("td");
    descriptionTd.colSpan = 3;
    descriptionTd.textContent = `Description: ${description}`;

    hideInfoTr.appendChild(yearTd);
    hideInfoTr.appendChild(descriptionTd);

    tr.appendChild(modelTd);
    tr.appendChild(priceTd);
    tr.appendChild(actionsTd);
    table.appendChild(tr);
    table.appendChild(hideInfoTr);

    moreInfoButton.addEventListener("click", (e) => {
      if (e.currentTarget.textContent == "More Info") {
        e.currentTarget.textContent = "Less Info";
        hideInfoTr.style.display = "contents";
      } else {
        e.currentTarget.textContent = "More Info";
        hideInfoTr.style.display = "none";
      }
    });
    buyItBtn.addEventListener("click", (e) => {
      let currentRow = e.currentTarget.parentNode.parentNode;
      let priceRow = Number(priceTd.textContent);
      let sum = priceRow + Number(totalPriceElement.textContent);
      totalPriceElement.textContent = sum.toFixed(2);
      currentRow.remove();
    });

    model = "";
    year = "";
    description = "";
    price = "";
  });
}
