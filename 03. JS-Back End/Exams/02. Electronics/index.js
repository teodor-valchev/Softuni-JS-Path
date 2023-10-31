const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

//config Require
const { PORT, MONGO_DB_URI } = require("./configs/configuration")
const { AuthUser } = require('./middlewares/auth')
const routes = require('./router')

//Aplication Init
const app = express();

//configuring Handlebars
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");

//configuring express
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// using the middleware on every request
app.use(AuthUser)

// routers
app.use(routes)

// DB Setup
async function dbConnect() {
    await mongoose.connect(MONGO_DB_URI);
}
dbConnect().then(() => console.log("The connection to the DB is Sucessfull!"));

app.listen(PORT, () =>
    console.log(`Server is currently running on PORT: ${PORT}...`)
);
