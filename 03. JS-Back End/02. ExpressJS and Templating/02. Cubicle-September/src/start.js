const express = require("express");
const router = require("./router");
const { PORT } = require("./config/config");
const handlebarsConfig = require("./config/handlebarsConfig");
const viewConfig = require("./config/expressConfig");

const app = express();

handlebarsConfig(app);
viewConfig(app);

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}...`);
});
