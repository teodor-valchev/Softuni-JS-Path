const express = require("express");
const handlebars = require("express-handlebars");
const path = require('path')

const { PORT } = require("./constants");
const router = require('./router')

//App Init
const app = express();

//express-setup
app.use(express.static(path.resolve(__dirname ,'public')));

//Handlebars-setup
app.engine("hbs", handlebars.engine({extname:'hbs'}));
app.set("view engine", "hbs");
app.set("views", "views");

// setting-up Router
app.use(router)


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
