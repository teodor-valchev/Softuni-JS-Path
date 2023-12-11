const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { auth } = require("./middlewares/auth");

const { PORT, DB_URI_STRING } = require("./constants");
const router = require("./router");

//App Init
const app = express();

//express-setup
app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);

//Handlebars-setup
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "views");

// setting-up Router
app.use(router);

// DB Setup
async function dbConnect() {
    await mongoose.connect(DB_URI_STRING);
}
dbConnect().then(() => console.log("Successfully Connected to DB!"));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
