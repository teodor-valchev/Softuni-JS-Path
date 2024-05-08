import { logout } from "./api/api.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { homePage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";

const root = document.querySelector("div.container");
document.getElementById("logoutBtn").addEventListener("click", onLogout);

page(decorateContext);
page("/", homePage);
page("/my-furniture", homePage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/login", loginPage);
page("/register", registerPage);

updateUserNav();

page.start();

// middleware for invoking context for every page
function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next();
}

function updateUserNav() {
    const user = getUserData();

    const userElement = document.getElementById("user");
    const guestElement = document.getElementById("guest");

    if (user) {
        userElement.style.display = "inline-block";
        guestElement.style.display = "none";
    } else {
        userElement.style.display = "none";
        guestElement.style.display = "inline-block";
    }
}

async function onLogout() {
    await logout();
    updateUserNav();
    page.redirect("/");
}
