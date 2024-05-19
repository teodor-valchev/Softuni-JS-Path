const cors = require("cors");
const express = require("express");
const { auth } = require("../middlewares/authMiddleware");

module.exports = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(auth);
};
