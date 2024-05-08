import { getAll, getMyItems } from "../api/data.js";
import { html, until } from "../lib.js";
import { getUserData } from "../util.js";

const catalogPageTemplate = (dataPromise, isMyItems) =>
    html`<div class="row space-top">
            <div class="col-md-12">
                ${isMyItems
                    ? html`<h1>My Furniture</h1>
                          <p>This is a list of your publications.</p>`
                    : html`<h1>Welcome to Furniture System</h1>
                        <p>
                            Select furniture from the catalog to view details.
                        </p>`}
            </div>
        </div>
        <div class="row space-top">
            ${until(dataPromise, html`<p>Loading...</p>`)}
        </div>`;

const itemTemplate = (item) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${item.img} />
                <p>D${item.description}</p>
                <footer>
                    <p>Price: <span>${item.price} $</span></p>
                </footer>
                <div>
                    <a href="/details/${item._id}" class="btn btn-info"
                        >Details</a
                    >
                </div>
            </div>
        </div>
    </div>
`;

export async function homePage(ctx) {
    const path = ctx.path;
    if (path === "/") {
        ctx.render(catalogPageTemplate(loadItems()));
    } else {
        const isMyItems = true;
        ctx.render(catalogPageTemplate(loadItems(isMyItems), isMyItems));
    }
}

async function loadItems(isMyItems) {
    let items;

    if (isMyItems) {
        const user = await getUserData();
        items = await getMyItems(user.id);
    } else {
        items = await getAll();
    }

    return items.map(itemTemplate);
}
