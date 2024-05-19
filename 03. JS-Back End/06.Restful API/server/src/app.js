const express = require("express");
const cors = require('cors')
const { PORT } = require("./constants");
const router = require("./router");
const dbConfig = require("./configs/dbConfig");
const { auth } = require("./middlewares/authMiddleware");

const app = express();

app.use(cors())
app.use(express.json())
app.use(auth)
app.use(router)

app.listen(PORT, dbConfig(), console.log(`Server is running on port: ${PORT} `));
