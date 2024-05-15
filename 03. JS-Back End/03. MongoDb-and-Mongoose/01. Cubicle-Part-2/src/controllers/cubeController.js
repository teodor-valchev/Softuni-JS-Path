const router = require("express").Router();
const { createCube, getCube } = require("../service/cubeService");

router.get("/create", (req, res) => {
    res.render("create");
});

router.post("/create", async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    const cubeData = {
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
    };
    await createCube(cubeData);

    res.redirect("/");
});

router.get("/details/:cubeId", async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await getCube(cubeId).lean();

    res.render("details", { cube });
});

router.get("/attach/:cubeId", async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await getCube(cubeId).lean();

    res.render("accessory/attach", { cube });
});

module.exports = router;
