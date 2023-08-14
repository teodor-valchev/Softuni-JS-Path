import page  from "../node_modules/page/page.mjs"
import { addRender } from "./middleware/render.js"
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";

import { logout } from './services/user.js'// toва е за тестване на заявките
import { addSession } from "./middleware/session.js";


page(addSession)// трабва да бъде над рендера
page(addRender);


page('/',homePage )
page('/catalog',catalogPage)
page('/login',loginPage)
page('/create',createPage)
page('/register',registerPage)
page('/edit/:id',editPage)
page('/details/:id',detailsPage)
page('/logout',onLogout)

page.start();

function onLogout (ctx){ // едно и също
logout();
ctx.page.redirect('/')
}