const url = "http://localhost:3030/users/login";
document.querySelector("#login-form").addEventListener("submit", (e) => {
  const formData = new FormData(e.target);

  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "" || password === "") {
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
    .then((res) => res.json())
    .then((p) => {
        localStorage.setItem("X-Authorization", p.accessToken);
    });

    location.href = "http://127.0.0.1:5500/05.Fisher-Game/src/index.html";
});
