function solve() {
  let getInput = document.getElementById("text").value;
  let getConvention = document.getElementById("naming-convention").value;
  let getResultElement = document.getElementById("result");
  let result = "";
  switch (getConvention) {
    case "Camel Case":
      // this is AN example
      for (let i = 0; i < getInput.length; i++) {
        if (getInput[i] == " ") {
          result += getInput[i + 1].toUpperCase();
          i++;
        } else {
          result += getInput[i].toLowerCase();
        }
      }
      break;
    case "Pascal Case":
      result += getInput[0].toUpperCase();
      for (let i = 1; i < getInput.length; i++) {
        if (getInput[i] == " ") {
          result += getInput[i + 1].toUpperCase();
          i++;
        } else {
          result += getInput[i].toLowerCase();
        }
      }
      break;

    default:
      result = "Error!";
      break;
  }
  getResultElement.textContent = result;
}
