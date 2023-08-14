window.addEventListener("load", solve);

function solve() {
  let genreElement = document.getElementById("genre");
  let songNameElement = document.getElementById("name");
  let authorNameElement = document.getElementById("author");
  let dateElement = document.getElementById("date");
  let collectionOfSongs = document.querySelector(".all-hits-container");
  var counter = 0;
  let addBtn = document.getElementById("add-btn");

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      genreElement.value !== "" &&
      songNameElement.value != "" &&
      authorNameElement.value !== "" &&
      dateElement.value !== ""
    ) {
      let div = document.createElement("div");
      div.className = "hits-info";

      let img = document.createElement("img");
      img.src = "./static/img/img.png";

      let h2Genre = document.createElement("h2");
      h2Genre.textContent = `Genre: ${genreElement.value}`;

      let h2SongName = document.createElement("h2");
      h2SongName.textContent = `Name: ${songNameElement.value}`;

      let h2AuthorName = document.createElement("h2");
      h2AuthorName.textContent = `Author: ${authorNameElement.value}`;

      let h3Date = document.createElement("h3");
      h3Date.textContent = `Date: ${dateElement.value}`;

      let saveSongBtn = document.createElement("button");
      saveSongBtn.className = "save-btn";
      saveSongBtn.textContent = "Save song";

      let likeBtn = document.createElement("button");
      likeBtn.className = "like-btn";
      likeBtn.textContent = "Like song";

      let deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Delete";

      div.appendChild(img);
      div.appendChild(h2Genre);
      div.appendChild(h2SongName);
      div.appendChild(h2AuthorName);
      div.appendChild(h3Date);
      div.appendChild(saveSongBtn);
      div.appendChild(likeBtn);
      div.appendChild(deleteBtn);
      collectionOfSongs.appendChild(div);

      likeBtn.addEventListener("click", (e) => {
        let likeParagraph = document.querySelector(".likes p");
        if (likeBtn.style.background != "gray") {
          likeParagraph.textContent = `Total Likes: ${++counter}`;
          likeBtn.disabled = true;
        }
        if (likeBtn == false) {
          likeBtn.style.background = "gray";
          likeBtn.disabled = false;
        }
      });
      saveSongBtn.addEventListener("click", (e) => {
        let savedSongsContainer = document.querySelector(".saved-container");
        div.removeChild(likeBtn);
        div.removeChild(saveSongBtn);
        savedSongsContainer.appendChild(div);
      });
      deleteBtn.addEventListener("click", (e) => {
        let savedSongsContainer = document.querySelector(".saved-container");
        savedSongsContainer.removeChild(div);
      });
    }
  });
}
