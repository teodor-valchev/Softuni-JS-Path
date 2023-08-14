function solve() {
  let creatorElement = document.getElementById("creator");
  let titleElement = document.getElementById("title");
  let categoryElement = document.getElementById("category");
  let contentElement = document.getElementById("content");
  let createBtn = document.querySelector("button");
  let section = document.querySelectorAll("section"); //section[1]
  let archiveSection = document.querySelector(".archive-section");
  let ol = document.querySelector("ol");
  let sort = [];
  createBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let article = document.createElement("article");

    let h1Title = document.createElement("h1");
    h1Title.textContent = titleElement.value;

    let categoryParagraph = document.createElement("p");
    categoryParagraph.textContent = "Category:";

    let striongParagraph = document.createElement("strong");
    striongParagraph.textContent = categoryElement.value;

    let creatorParagraph = document.createElement("p");
    creatorParagraph.textContent = "Creator:";

    let striongCreator = document.createElement("strong");
    striongCreator.textContent = creatorElement.value;

    let textP = document.createElement("p");
    textP.textContent = contentElement.value;

    let div = document.createElement("div");
    div.className = "buttons";

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn delete";
    deleteBtn.textContent = "Delete";

    let archiveBtn = document.createElement("button");
    archiveBtn.className = "btn archive";
    archiveBtn.textContent = "Archive";

    div.appendChild(deleteBtn);
    div.appendChild(archiveBtn);

    categoryParagraph.appendChild(striongParagraph);
    creatorParagraph.appendChild(striongCreator);

    article.appendChild(h1Title);
    article.appendChild(categoryParagraph);
    article.appendChild(creatorParagraph);
    article.appendChild(textP);
    article.appendChild(div);
    section[1].appendChild(article);

    archiveBtn.addEventListener("click", (e) => {
 
      sort.push(titleElement.value);
 for (const el of sort) {
   let li = document.createElement("li");
   li.textContent = el
   ol.appendChild(li)
 }
 sort.sort((a, b) => a.localeCompare(b));
      archiveSection.appendChild(ol);
    });
  });
}
