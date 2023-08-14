async function loadRepos() {
  const username = document.getElementById("username").value;
  const url = `https://api.github.com/users/${username}/repos`;
  const listElement = document.querySelector("li");
  listElement.children[0].remove();
  const fetchedData = await fetch(url);
  let data = await fetchedData.json();
  
  data.forEach((el) => {
    let aElement = document.createElement("a");
    let liElement = document.createElement("li");
    let value = Object.values(el);
    let link = value[3];
    aElement.href = link;
    aElement.textContent = link;
    liElement.appendChild(aElement);
    listElement.appendChild(liElement);
  });
}
