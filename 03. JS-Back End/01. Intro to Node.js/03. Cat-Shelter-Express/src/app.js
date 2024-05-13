const express = require("express");
const handlebars = require('express-handlebars')
const path = require('path')

const app = express();
const PORT = 3000;

//handlebars setup
app.engine('hbs', handlebars.engine({
    extname:'hbs'
}))
app.set('view engine', 'hbs')
//views set
app.set('views', 'src/views');

// static files
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/cats/add-cat", (req, res) => {
    res.render("addCat");
});

app.get("/cats/add-breed", (req, res) => {
    res.render("addBreed");
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`));
