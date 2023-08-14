function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let input = document.getElementById("searchField").value;
    let getTable = Array.from(document.querySelectorAll("tbody tr"));

    for (const row of getTable) {
      row.classList.remove("select");
      if (row.innerHTML.includes(input) && input !== "") {
        row.className = "select";
      }
    }
    input = "";
  }
}
