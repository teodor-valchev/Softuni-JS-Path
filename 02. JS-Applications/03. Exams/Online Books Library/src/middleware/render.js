import {html, render} from'../../node_modules/lit-html/lit-html.js'
// да не забравя динамично да се сменя след статичното
const navTemplate = (user) =>html`

            <!-- Navigation -->
            <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="/">Dashboard</a>
                    ${user ? html`  <div id="user">
                        <span>Welcome, ${user.email}</span>
                        <a class="button" href="/catalog">My Books</a>
                        <a class="button" href="/create">Add Book</a>
                        <a class="button" href="/logout">Logout</a>
                    </div>` : html`  <div id="guest">
                        <a class="button" href="/login">Login</a>
                        <a class="button" href="/register">Register</a>
                    </div>` }                           
                </section>
            </nav>
`


const header = document.querySelector('.my-header') // за да рендя навбара
const root = document.getElementById('site-content')

function ctxRender(content) { // да го коп
    render(content,root);
}

// След като направя логиката за регистрацията тогава сменям Navbar от тук

export function addRender(ctx,next) { // да го коп
    render(navTemplate(ctx.user),header)
    ctx.render = ctxRender
    next();
}