const express = require("express");

const app = express();

const viewEngine = require("./config/viewEngine");
const expressConfig = require("./config/expressConfig");
const config = require("./config/config");
const router = require("./routes");

viewEngine(app);
expressConfig(app);

app.use(router);

app.listen(3000, () => {
    console.log(`Server is running on localhost:${config.PORT}....`);
});
