let url = "http://localhost:3030/jsonstore/collections/myboard/posts";
let commentsURL = "http://localhost:3030/jsonstore/collections/myboard/comments";
const form = document.querySelector("form");

export function getPostComments(postID) {
  url += "/" + postID;

  fetch(url)
    .then((res) => res.json())
    .then((post) => renderPost(post.topicName, post.postText));
}

function renderPost(topicName, postText) {
  const container = document.querySelector(".container");

  const themeContentElement = document.createElement("div");
  themeContentElement.className = "theme-content";

  themeContentElement.innerHTML = `
            <!-- theme-title  -->
            <div class="theme-title">
                <div class="theme-name-wrapper">
                    <div class="theme-name">
                        <h2>${topicName}</h2>
                    </div>
                </div>
            </div>
            <!-- comment  -->
            <div class="comment">
            ${postText}
            </div>
            <div class="answer-comment">
                <p><span>currentUser</span> comment:</p>
                <div class="answer">
                    <form>
                        <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                        <div>
                            <label for="username">Username <span class="red">*</span></label>
                            <input type="text" name="username" id="username">
                        </div>
                        <button>Post</button>
                    </form>
                </div>
            </div>`;

  container.append(themeContentElement);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);

    let comment = formData.get('postText');
    let userName = formData.get('username')

    const data = {
        comment,
        user: userName
    }

    fetch(commentsURL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((comment) => postComent(comment.user,comment.comment));
})

function postComent(user, comment) {
    const commentBody = document.querySelector(".comment");


    let uodatedView = document.createElement('div');
    uodatedView.className = 'header'

        uodatedView.innerHTML = ` <div class="header">
        <img src="./static/profile.png" alt="avatar">
        <p><span>${user}</span> posted on <time>${new Date().toLocaleDateString()}</time></p>

        <p class="post-content">${comment}</p>
    </div>`;

    commentBody.appendChild(uodatedView);
}