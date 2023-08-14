

function loadRepos() {
  let result = document.getElementById("res");
  const url = "https://api.github.com/users/testnakov/repos";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let repos = Object.values(data);
      repos.forEach((info) => `${(result.textContent = info.id)}\n`);
    });
}
