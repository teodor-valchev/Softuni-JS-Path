import { createNewTopic, clearFields } from './home.js'
import { getPostComments } from './comments.js'

const postBtn = document.querySelector('.public');
const cancelBtn = document.querySelector('.cancel');
const topicContainer = document.querySelector(".topic-container");
const main = document.querySelector('main')

postBtn.addEventListener('click', () => {
    createNewTopic();
})

cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clearFields();
})

topicContainer.addEventListener('click', (e) => {
    e.preventDefault();
    main.style.display = 'none';
    const postID = e.target.parentNode.parentNode.parentNode.id;

    getPostComments(postID);
})