import { create } from "../api/data.js";
import { html } from "../lib.js";

//TODO FINISH UP HERE AFTER LOGIN AND REGISTER

const createFurnitureTemplate = (onSubmit, errorMsg, errors) => html` <form
    @submit=${onSubmit}
>
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    ${errorMsg ? html`<div class="form-group error">${errorMsg}</div>` : null}
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input
                    class=${"form-control" +
                    (errors.make ? " is-invalid" : " is-valid")}
                    id="new-make"
                    type="text"
                    name="make"
                />
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input
                    class=${"form-control" +
                    (errors.model ? " is-invalid" : " is-valid")}
                    id="new-model"
                    type="text"
                    name="model"
                />
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input
                    class=${"form-control" +
                    (errors.year ? " is-invalid" : " is-valid")}
                    id="new-year"
                    type="number"
                    name="year"
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
                />
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input
                    class=${"form-control" +
                    (errors.price ? " is-invalid" : " is-valid")}
                    id="new-price"
                    type="number"
                    name="price"
                />
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input
                    class=${"form-control" +
                    (errors.img ? " is-invalid" : " is-valid")}
                    id="new-image"
                    type="text"
                    name="img"
                />
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material"
                    >Material (optional)</label
                >
                <input
                    class=${"form-control" +
                    (errors.material ? " is-invalid" : " is-valid")}
                    id="new-material"
                    type="text"
                    name="material"
                />
            </div>
            <input type="submit" class="btn btn-primary" value="Create" />
        </div>
    </div>
</form>`;

export async function createPage(ctx) {
    update(null, {});

    function update(errorMsg, errors) {
        ctx.render(createFurnitureTemplate(onSubmit, errorMsg, errors));
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

            await create(data);
            ctx.page.redirect("/");
        } catch (err) {
            const message = err.message || err.error.message;
            update(message, err.errors || {});
        }
    }
}
