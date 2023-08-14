
const loggedUserNav = document.querySelector(".log-nav");
const guestUserNav = document.querySelector(".guest-nav")
const addMovieSection = document.querySelector("#movies");
const userEmail = document.querySelector(".nav-link.welcome");

export function AuthUser() {
    const token = localStorage.getItem("X-Authorization");

    if (token) {
        displayLoggedUser();
        return true;
    } else {
        displayGuestUser();
        return false;
    }
    
}

function displayLoggedUser() {
            userEmail.textContent = `Welcome, ${localStorage.getItem("email")}`;
            loggedUserNav.style.display = "inherit";
            guestUserNav.style.display = "none";
            addMovieSection.style.display = "block";
}

function displayGuestUser() {
            guestUserNav.style.display = "inherit";
            loggedUserNav.style.display = "none";
            addMovieSection.style.display = "none";
}