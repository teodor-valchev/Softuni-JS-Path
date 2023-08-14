const url = 'http://localhost:3030/users/register'; 

document.querySelector("#register-form").addEventListener("submit", (e) => {
  const formData = new FormData(e.target);

  const email = formData.get("email");
  const password = formData.get("password");
  const repeatPassword = formData.get("rePass");

  if (
    (email === "" || password === "" || repeatPassword === " ") &&
    password !== repeatPassword
  ) {
    return;
  }

  const data = {
    email,
    password,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  
  location.href = "http://127.0.0.1:5500/05.Fisher-Game/src/login.html";
});
