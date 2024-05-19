const express = require("express");
const { PORT } = require("./constants");
const router = require("./router");
const dbConfig = require("./configs/dbConfig");
const expressConfig = require("./configs/expressConfig");

const app = express();

expressConfig(app);
app.use(router);

app.listen(
    PORT,
    dbConfig(),
    console.log(`Server is running on port: ${PORT} `)
);
