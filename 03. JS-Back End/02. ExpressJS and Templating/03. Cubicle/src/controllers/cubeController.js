const router = require("express").Router();
const { createCube } = require("../service/cubeService");

router.get("/create", (req, res) => {
    res.render("create");
});

router.post("/create", (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    const cubeData = {
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
    };
    createCube(cubeData);

    res.redirect("/");
});

module.exports = router;
