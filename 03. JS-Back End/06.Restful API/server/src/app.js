const express = require("express");
const { PORT } = require("./constants");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from restApi");
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT} `));
