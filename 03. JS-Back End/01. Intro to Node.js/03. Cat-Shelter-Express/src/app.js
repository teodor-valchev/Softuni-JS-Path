const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const fs = require('fs')
const breeds = require('./data/breeds')

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
    res.render("home");
});

app.get("/cats/add-cat", (req, res) => {
    res.render("addCat", {breeds});
});

app.get("/cats/add-breed", (req, res) => {
    res.render("addBreed");
});

app.post("/cats/add-breed", (req, res) => {
    const { breed } = req.body;
    const filePath = path.join(__dirname, './data/breeds.json')

    fs.readFile(filePath,'utf-8' ,(err, data) => {
        if (err) {
            res.send('Invalid path')
            return
        }
        const parsedBreeds = JSON.parse(data);
        parsedBreeds.push(breed)
        const json = JSON.stringify(parsedBreeds)

        fs.writeFile(filePath, json, () => {
            res.redirect('/')
        })
    })
});

app.use('*', (req, res) => {
    res.render('404')
})

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`));
