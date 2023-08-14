const loginForm = document.querySelector("#form-login");

const loginUrl = "http://localhost:3030/users/login";

export function renderLogin() {
  loginForm.style.display = "block";
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "" || password === "") {
    return;
  }

  let data = {
    email,
    password,
    };
    
  fetch(loginUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((user) => {
      localStorage.setItem('email', user.email)
      localStorage.setItem("X-Authorization", user.accessToken);
    });
    

  location.href = "http://127.0.0.1:5500/02.Movies/";
});
