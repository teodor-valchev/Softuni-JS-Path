const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const breeds = require("./data/breeds");
const cats = require("./data/cats");

const app = express();
const PORT = 3000;

//handlebars setup
app.engine(
    "hbs",
    handlebars.engine({
        extname: "hbs",
    })
);
app.set("view engine", "hbs");
//views set
app.set("views", "src/views");

// static files
app.use(express.static(path.join(__dirname, "public")));

//body parser enable
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    const { renderCats } = require("./utli");
    renderCats(res);
});

app.get("/cats/add-cat", (req, res) => {
    res.render("addCat", { breeds });
});

app.post("/cats/add-cat", (req, res) => {
    const { createCat } = require("./utli");

    createCat(req, res);
});

app.get("/cats/add-breed", (req, res) => {
    res.render("addBreed");
});

app.post("/cats/add-breed", (req, res) => {
    const { createBreed } = require("./utli");
    createBreed(req, res);
});

app.get("/cats/edit/:catId", (req, res) => {
    const catId = req.params.catId;
    const cat = cats.find((x) => x.id == catId);

    res.render("editCat", { cat, breeds });
});

app.post("/cats/edit/:catId", (req, res) => {
    const { editCat } = require("./utli");
    const catId = req.params.catId;
    const cat = cats.find((x) => x.id == catId);

    editCat(cat, req, res);
});

app.get("/cats/delete/:catId", (req, res) => {
    const { deleteCat } = require("./utli");
    const catId = req.params.catId;

    deleteCat(catId, req, res);
});

app.use("*", (req, res) => {
    res.render("404");
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`));
