

const addMovieForm = document.getElementById("add-movie");

const createMovieUrl = "http://localhost:3030/data/movies";

let detailsUrl = "http://localhost:3030/data/movies/";

export function renderAddMovieForm() {
    addMovieForm.style.display = 'block';
}

addMovieForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);

    let title = formData.get("title");
    let description = formData.get("description");
    let img = formData.get("imageUrl");

    if (title === "" || description === "" || imageUrl === "") {
        alert('All fields required!')
        return;
    }
        const accessToken = localStorage.getItem("X-Authorization");

    let data = {
        title,
        description,
        img
    }

    fetch(createMovieUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data)
    })
    location.href = "http://127.0.0.1:5500/02.Movies/";
})

export function getAllMovies() {
    fetch(createMovieUrl, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(movies => renderSingleMovie(movies));
}


function renderSingleMovie(movies) {
    const container = document.querySelector('.card-deck.d-flex.justify-content-center')
    for (const movie of movies) {
        console.log(movie);
        const template = document.createElement('div');
        template.className = "card mb-4";
        template.innerHTML = `
                    <img class="card-img-top" src="${movie.img}"
                            alt="Card image cap" width="400">
                    <div class="card-body">
                        <h4 class="card-title">${movie.title}</h4>
                    </div>
                    <div class="card-footer">
                        <a href="${movie._id}">
                            <button type="button" class="btn btn-info">Details</button>
                        </a>
                    </div>`;       
        container.append(template);
    }

        const btnInfos = document.querySelectorAll(".btn.btn-info");

    for (const btn of btnInfos) {
            
        const btnTarget = btn.parentNode.href;
        const id = btnTarget.split("/")[4];

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            detailsUrl += id;

            fetch(detailsUrl, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(movie => {

                    const movieExmaple = document.querySelector('#movie-example');
                    const container = document.createElement('div');
                    container.className = "container";

                    container.innerHTML= ` <h1>Movie title: ${movie.title}</h1>
                            <div class="col-md-8">
                                <img class="img-thumbnail" src="${movie.img}"
                                    alt="Movie">
                            </div>
                            <div class="col-md-4 text-center">
                                <h3 class="my-3 ">Movie Description</h3>
                                <p>${movie.description}</p>
                                <a class="btn btn-danger" href="#">Delete</a>
                                <a class="btn btn-warning" href="#">Edit</a>
                                <a class="btn btn-primary" href="#">Like</a>
                                <span class="enrolled-span">Liked 1</span>
                            </div>`
                    movieExmaple.append(container);
                    movieExmaple.style.display = 'block';
                });
        })
        
        }
}