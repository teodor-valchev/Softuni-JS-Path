import { html } from "../../node_modules/lit-html/lit-html.js";
import * as gamesService from '../services/games.js'


const catalogTemplate = (cataloges)=>html`
<section id="catalog-page">
    <h1>All Games</h1>
  ${ cataloges.length > 0 ? cataloges.map((c)=>previewCatalog(c)) : html`<p class="no-articles">No articles yet</p>`}
</section>
`

const previewCatalog = (catalog) =>html`
   <div class="allGames">
        <div class="allGames-info">
            <img src=${catalog.imageUrl}>
            <h6>${catalog.category}</h6>
            <h2>${catalog.title}</h2>
            <a href="/details/${catalog._id}" class="details-button">Details</a>
        </div>

    </div>
`
export async function catalogPage(ctx){
    const cataloges = await gamesService.getCatalog();
    ctx.render(catalogTemplate(cataloges))
}