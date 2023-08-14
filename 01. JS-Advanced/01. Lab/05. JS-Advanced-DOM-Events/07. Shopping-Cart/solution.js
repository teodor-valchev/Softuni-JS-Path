function solve() {
  let addBtn = document.querySelectorAll(".add-product");
  let textArea = document.getElementsByTagName("textarea")[0];
  let checkoutBtn = document.querySelector(".checkout");
  addBtn.forEach((x) => x.addEventListener("click", addAndMessage));
  checkoutBtn.addEventListener("click", checkout);
  let totalPrice = [];
  let productsName = [];

  function checkout() {
    let totalSum = totalPrice.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    let output = `You bought ${productsName.join(", ")} for ${totalSum.toFixed(
      2
    )}.`;
    textArea.textContent += output;
    Array.from(document.getElementsByTagName('button')).forEach(x => x.disabled = true);
  }
  function addAndMessage(ev) {
    let prize = Number(ev.target.parentNode.parentNode.children[3].textContent);
    let name =
      ev.target.parentNode.parentNode.children[1].children[0].textContent;
    let output = `${name} for ${prize.toFixed(2)} to the cart.\n`;
    textArea.textContent += output;
    totalPrice.push(prize);
    if (!productsName.includes(name)) {
      productsName.push(name);
    }
  }
}
