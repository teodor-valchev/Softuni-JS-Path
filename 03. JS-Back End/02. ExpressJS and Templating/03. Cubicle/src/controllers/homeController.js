const router = require("express").Router();
const { getAll } = require("../service/cubeService");

router.get("/", (req, res) => {
    const cubes = getAll();
    res.render("home", { cubes });
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/404", (req, res) => {
    res.render("404");
});

module.exports = router;
