window.addEventListener("load", solution);

function solution() {
  const fnameElement = document.getElementById("fname");
  const emailElement = document.getElementById("email");
  const phoneNumberElement = document.getElementById("phone");
  const adressElement = document.getElementById("address");
  const postalCodeElement = document.getElementById("code");
  const submitBtn = document.getElementById("submitBTN");
  const infoPreview = document.getElementById("infoPreview");
  const editBtn = document.getElementById("editBTN");
  const continueBtn = document.getElementById("continueBTN");
  const block = document.getElementById("block");
  const form = document.getElementById("form");
  const h1 = document.querySelector("h1");
  const h4 = document.querySelector("h4");
  const information = document.getElementById("information");
  const footer = document.querySelector("footer");

  let emptyName = "";
  let emptyEmail = "";
  let emptyPhone = "";
  let emptyAddress = "";
  let emptyCode = "";

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let fname = fnameElement.value;
    let email = emailElement.value;
    let phone = phoneNumberElement.value;
    let address = adressElement.value;
    let postalCode = postalCodeElement.value;

    emptyName = fname;
    emptyEmail = email;
    emptyPhone = phone;
    emptyAddress = address;
    emptyCode = postalCode;

    if (fname == "" || email == "") {
      return;
    }

    let fullNameLi = document.createElement("li");
    fullNameLi.textContent = `Full Name: ${fname}`;

    let emailLi = document.createElement("li");
    emailLi.textContent = `Email: ${email}`;

    let phoneLi = document.createElement("li");
    phoneLi.textContent = `Phone Number: ${phone}`;

    let addressLi = document.createElement("li");
    addressLi.textContent = `Address: ${address}`;

    let postalCodeLi = document.createElement("li");
    postalCodeLi.textContent = `Postal Code: ${postalCode}`;

    infoPreview.appendChild(fullNameLi);
    infoPreview.appendChild(emailLi);
    infoPreview.appendChild(phoneLi);
    infoPreview.appendChild(addressLi);
    infoPreview.appendChild(postalCodeLi);

    fnameElement.value = "";
    emailElement.value = "";
    phoneNumberElement.value = "";
    adressElement.value = "";
    postalCodeElement.value = "";

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    editBtn.addEventListener("click", (e) => {
      e.currentTarget.disabled = true;
      continueBtn.disabled = true;
      submitBtn.disabled = false;
      fnameElement.value = emptyName;
      emailElement.value = emptyEmail;
      phoneNumberElement.value = emptyPhone;
      adressElement.value = emptyAddress;
      postalCodeElement.value = emptyCode;
      infoPreview.remove();
    });
    continueBtn.addEventListener("click", (e) => {
      block.removeChild(form);
      block.removeChild(h4);
      block.removeChild(information);
      block.removeChild(h1);
      block.removeChild(footer);

      let h3 = document.createElement("h3");
      h3.textContent = "Thank you for your reservation!";
      block.appendChild(h3);
    });
  });
}
