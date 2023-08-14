
let url = 'http://localhost:3030/jsonstore/collections/books';

const tbody = document.querySelector('tbody');

function initEvents() {
    document.getElementById("loadBooks").addEventListener('click', getAllBooks);
    document.getElementById("submit").addEventListener("click", createBook);
}

function getAllBooks() {
    fetch(url)
        .then(res => res.json())
        .then(books => Object.values(books).forEach(book => {
            renderAll(book);
        }))
}
function createBook() {
    const author = document.querySelector('input[name="author"]').value;
    const title = document.querySelector('input[name="title"]').value;

    if (author === '' || title === '') {
        return;
    }

    const data = {
        author,
        title
    };
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

function renderAll(book) {
    const tr = document.createElement("tr");

    const tdAuthor = document.createElement("td");
    tdAuthor.textContent = book.author;

    const tdTitle = document.createElement("td");
    tdTitle.textContent = book.title;

    const tdButtonRow = document.createElement("td");

    const editBtn = document.createElement("button");
    editBtn.className = 'edit'
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "Delete";

    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);

    tdButtonRow.appendChild(editBtn);
    tdButtonRow.appendChild(deleteBtn);

    tr.appendChild(tdButtonRow);

    tbody.appendChild(tr);
    updateBook();
    
}
initEvents();

function updateBook() {
    console.log(this);
}