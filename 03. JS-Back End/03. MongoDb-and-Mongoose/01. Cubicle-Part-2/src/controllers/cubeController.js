const router = require("express").Router();
const { createCube, getCube } = require("../service/cubeService");

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

router.get("/details/:cubeId", (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = getCube(cubeId);

    res.render("details", { cube });
});

module.exports = router;
