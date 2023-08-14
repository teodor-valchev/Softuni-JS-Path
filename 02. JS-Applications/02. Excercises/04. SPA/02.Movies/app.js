
import { router } from './router.js'
import { AuthUser } from './auth.js'
import { getAllMovies } from './addMovie.js'
const navigation = document.querySelector(".navbar");
const authUser = AuthUser();
getAllMovies();

if (authUser) {
    const addMovieBtn = document.getElementById("add-movie-button");

    addMovieBtn.addEventListener('click', (e) => {
        e.preventDefault()

        const href = e.target.href;

        if (href) {
            const url = new URL(href);
            router(url.pathname);
        }
    })


    
} 

navigation.addEventListener('click', (e) => {
    e.preventDefault();
    const href = e.target.href;

    if (href) {
        const url = new URL(href);
        router(url.pathname);
    }
})
