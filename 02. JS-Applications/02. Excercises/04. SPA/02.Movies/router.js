import { renderLogin } from "./login.js";
import { renderRegister } from "./register.js";
import { renderHome } from "./home.js";
import { logout } from './logout.js'
import { renderAddMovieForm } from './addMovie.js'

const sections = document.querySelectorAll('section');

const routerPath = {
  "/": renderHome,
  "/login": renderLogin,
  "/logout": logout,
  "/register": renderRegister,
  "/add-movie": renderAddMovieForm
};

export function router(pathName) {
    hideContent();
    const renderer = routerPath[pathName];
    renderer();
}

function hideContent() {
    for (const section of sections) {
    section.style.display = "none";
    }
}
