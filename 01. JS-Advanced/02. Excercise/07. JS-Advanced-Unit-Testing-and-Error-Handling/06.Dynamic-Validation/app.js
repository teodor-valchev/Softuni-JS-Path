function validate() {
  let email = document.getElementById("email");
  const pattern = /[a-z]+@[a-z]+.[a-z]+/gm;

  email.addEventListener("change", (e) => {
    if (pattern.test(email.value)) {
      e.currentTarget.classList.remove("error");
    } else {
      e.currentTarget.classList.add("error");
    }
  });
}
