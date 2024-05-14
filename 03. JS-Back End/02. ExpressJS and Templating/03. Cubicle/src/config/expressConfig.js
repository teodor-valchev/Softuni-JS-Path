const path = require('path')
const express = require("express");

function expressConfig(app) {
    app.use(express.static(path.resolve(__dirname, "../public")));
}

module.exports = expressConfig