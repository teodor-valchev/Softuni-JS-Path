const formElement = document.querySelector("form");
const url = "http://localhost:3030/jsonstore/collections/myboard/posts";

export function createNewTopic() {
    formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    let topicName = formData.get("topicName");
    let username = formData.get("username");
    let postText = formData.get("postText");

    if (topicName === "" || username === "" || postText === "") {
        return;
    }

    const data = {
        topicName,
        username,
        postText,
        };

        createAjax(data);

        clearFields();
    });
}

function createConatainerForPosts(topicName, username, id) {
    const topicContainer = document.querySelector(".topic-container");

    const topicWrapper = document.createElement("div");
    topicWrapper.className = "topic-name-wrapper";
    topicWrapper.setAttribute("id", id);

    topicWrapper.innerHTML = `
        <div class="topic-name">
            <a href="theme-content.html" class="normal">
                <h2>${topicName}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${new Date().toLocaleDateString()}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${username}</span></p>
                    </div>
                </div>
            </div>
        </div>`;

    topicContainer.append(topicWrapper);
}

function createAjax(data) {
    fetch(url, {
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(data),
    })
    .then((resp) => resp.json())
    .then((post) =>
        createConatainerForPosts(post.topicName, post.username, post._id)
    );
}

export function clearFields() {
    formElement.reset();
}
