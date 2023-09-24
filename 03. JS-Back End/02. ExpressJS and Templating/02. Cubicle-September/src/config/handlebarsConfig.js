const handlebars = require("express-handlebars");
const path = require("path");

module.exports = (app) => {
    app.engine("hbs", handlebars.engine({ extname: "hbs" }));
    app.set("view engine", "hbs");
    app.set("views", path.resolve(__dirname, "../../src/views"));
};
