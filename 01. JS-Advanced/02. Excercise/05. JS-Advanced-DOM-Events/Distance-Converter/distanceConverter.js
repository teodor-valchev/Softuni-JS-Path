function attachEventsListeners() {
  let textInput = document.getElementById("inputDistance");
  let inputOptions = document.getElementById("inputUnits");
  let convertBtn = document
    .getElementById("convert")
    .addEventListener("click", convert);

  function convert() {
    let inputUnit = inputOptions.value;
    let input = Number(textInput.value);
    let outputField = document.getElementById("outputDistance");
    outputField.disabled = false;
    let outputUnit = document.getElementById("outputUnits").value;
    switch (inputUnit) {
      case "km":
        input *= 1000;
        break;
      case "m":
        input *= 1;
        break;
      case "cm":
        input *= 0.01;
        break;
      case "mm":
        input *= 0.001;
        break;
      case "mi":
        input *= 1609.34;
        break;
      case "yrd":
        input *= 0.9144;
        break;
      case "ft":
        input *= 0.3048;
        break;
      case "in":
        input *= 0.0254;
        break;
    }
    switch (outputUnit) {
      case "km":
        input /= 1000;
        break;
      case "m":
        input /= 1;
        break;
      case "cm":
        input /= 0.01;
        break;
      case "mm":
        input /= 0.001;
        break;
      case "mi":
        input /= 1609.34;
        break;
      case "yrd":
        input /= 0.9144;
        break;
      case "ft":
        input /= 0.3048;
        break;
      case "in":
        input /= 0.0254;
        break;
    }
    outputField.value = input;
  }
}
