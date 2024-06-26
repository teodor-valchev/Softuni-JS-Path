import { details, updateItem } from "../api/data.js";
import { html } from "../lib.js";

const editTemplate = (item, onSubmit, errorMsg, errors) =>
    html`<div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            ${errorMsg
                ? html`<div class="form-group error">${errorMsg}</div>`
                : null}
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make"
                            >Make</label
                        >
                        <input
                            class=${"form-control" +
                            (errors.make ? " is-invalid" : " is-valid")}
                            id="new-make"
                            type="text"
                            name="make"
                            value=${item.make}
                        />
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model"
                            >Model</label
                        >
                        <input
                            class=${"form-control" +
                            (errors.model ? " is-invalid" : " is-valid")}
                            id="new-model"
                            type="text"
                            name="model"
                            value="${item.make}"
                        />
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year"
                            >Year</label
                        >
                        <input
                            class=${"form-control" +
                            (errors.year ? " is-invalid" : " is-valid")}
                            id="new-year"
                            type="number"
                            name="year"
                            value=${item.year}
                        />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description"
                            >Description</label
                        >
                        <input
                            class=${"form-control" +
                            (errors.description ? " is-invalid" : " is-valid")}
                            id="new-description"
                            type="text"
                            name="description"
                            value=${item.description}
                        />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price"
                            >Price</label
                        >
                        <input
                            class=${"form-control" +
                            (errors.price ? " is-invalid" : " is-valid")}
                            id="new-price"
                            type="number"
                            name="price"
                            value=${item.price}
                        />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image"
                            >Image</label
                        >
                        <input
                            class=${"form-control" +
                            (errors.img ? " is-invalid" : " is-valid")}
                            id="new-image"
                            type="text"
                            name="img"
                            value=${item.img}
                        />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material"
                            >Material (optional)</label
                        >
                        <input
                            class=${"form-control" +
                            (errors.materia ? " is-invalid" : " is-valid")}
                            id="new-material"
                            type="text"
                            name="material"
                            value=${item.material}
                        />
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const item = await details(id);

    update(null, {});

    async function update(errorMsg, errors) {
        ctx.render(editTemplate(item, onSubmit, errorMsg, errors));
    }

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const make = formData.get("make");
        const model = formData.get("model");
        const year = formData.get("year");
        const description = formData.get("description");
        const price = formData.get("price");
        const img = formData.get("img");
        const material = formData.get("material");

        try {
            if (
                make == "" ||
                model == "" ||
                year == "" ||
                description == "" ||
                price == "" ||
                img == "" ||
                material == ""
            ) {
                throw {
                    error: new Error("All fields are required!"),
                    errors: {
                        make: make == "",
                        model: model == "",
                        year: year == "",
                        description: description == "",
                        price: price == "",
                        img: img == "",
                        material: img == "",
                    },
                };
            }

            const data = {
                make,
                model,
                year,
                description,
                price,
                img,
                material,
            };

            await updateItem(id, data);
            ctx.page.redirect(`/details/${id}`);
        } catch (err) {
            const message = err.message || err.error.message;
            update(message, err.errors || {});
        }
    }
}
