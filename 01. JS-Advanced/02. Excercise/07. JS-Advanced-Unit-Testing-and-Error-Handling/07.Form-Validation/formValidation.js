function validate() {
  const usernamePattern = /^[a-zA-Z0-9]{3,20}/gm;
  const passwordPattern = /^[\w]{5,15}$/;
  const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
  let submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click", (e) => {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmedPassword = document.getElementById("confirm-password");

    let companyCheckbox = document.getElementById("company");
    let companyInfo = document.getElementById("companyInfo");
    let companyNumber = document.getElementById("companyNumber");
    let valid = document.getElementById("valid");
    let count = 0;
    if (usernamePattern.test(username.value)) {
      username.style.borderColor = "none";
      count++;
    } else {
      username.style.borderColor = "red";
    }
    if (emailPattern.test(email.value)) {
      email.style.borderColor = "none";
      count++;
    } else {
      email.style.borderColor = "red";
    }
    if (passwordPattern.test(password.value)) {
      password.style.borderColor = "none";
      count++;
    } else {
      password.style.borderColor = "red";
    }
    if (
      password.value != confirmedPassword.value ||
      confirmedPassword.value == ""
    ) {
      confirmedPassword.style.borderColor = "red";
      password.style.borderColor = "red";
    } else {
      confirmedPassword.style.borderColor = "none";
      count++;
    }
    if (companyCheckbox.checked) {
      companyInfo.style.display = "block";

      if (companyNumber.value > 1000 && companyNumber.value < 9999) {
        companyNumber.style.borderColor = "none";
        count++;
      } else {
        companyNumber.style.borderColor = "red";
      }
    } else {
      companyInfo.style.display = "none";
    }
    if (count == 4 || count == 5) {
      valid.style.display = "block";
    } else {
      valid.style.display = "none";
    }
  });
}
