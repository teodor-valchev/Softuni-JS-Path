function attachEvents() {
  const postBtn = document.getElementById("btnLoadPosts");
  const viewButton = document.getElementById("btnViewPost");
  const postContainer = document.getElementById("posts");

  postBtn.addEventListener("click", (e) => {
    const posts = getAllPosts();
    const postKeys = posts.keys;
    const postTitles = posts.titles;

    let counter = 0;
    postKeys.forEach((pk) => {
      const optionElement = document.createElement("option");
      optionElement.textContent = postTitles[counter];

      optionElement.setAttribute("value", pk);
      postContainer.appendChild(optionElement);

      counter++;
    });
  });

  viewButton.addEventListener("click", () => {
    const commentId = postContainer.value;
    getAllComments(commentId);
  });
}

function getAllPosts() {
  const url = " http://localhost:3030/jsonstore/blog/posts";

  const postsObj = {
    keys: [],
    titles: [],
  };

  fetch(url)
    .then((r) => r.json())
    .then((posts) => {
      for (const post in posts) {
        postsObj.keys.push(post);
        postsObj.titles.push(posts[post].title);
      }
    });

  return postsObj;
}

function getAllComments(commentId) {
  const url = `http://localhost:3030/jsonstore/blog/comments/${commentId}`;

  fetch(url)
    .then((r) => r.json())
    .then((comment) => console.log(comment));
}

attachEvents();
