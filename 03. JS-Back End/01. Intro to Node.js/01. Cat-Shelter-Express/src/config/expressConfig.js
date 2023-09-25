const express = require("express");
const path = require("path");

module.exports = (app) => {
    app.use(express.static(path.resolve(__dirname, "../public")));
    app.use(express.urlencoded({ extended: true }));
};
