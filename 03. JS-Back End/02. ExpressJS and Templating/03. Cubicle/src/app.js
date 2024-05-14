const express = require("express");
const hbsConfig = require("./config/hbsConfiguration");
const expressConfig = require("./config/expressConfig");
const router = require("./router");

const app = express();
const PORT = 3000;

//hbs setup
hbsConfig(app);

//expressConfig
expressConfig(app);

app.use(router);

app.listen(PORT, () => console.log(`Server is running on poort: ${PORT}...`));
