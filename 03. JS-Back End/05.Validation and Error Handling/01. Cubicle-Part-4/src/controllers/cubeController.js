const router = require("express").Router();
const { extractErrorMessages } = require("../helpers/errorHelper");
const { difficultyLevelViewData } = require("../helpers/viewData");
const { isAuth } = require("../middlewares/authMiddleware");
const { getOthers } = require("../service/accessoryService");
const {
    createCube,
    getCube,
    attachAccessory,
    editCube,
    deleteCube,
} = require("../service/cubeService");

router.get("/create", isAuth, (req, res) => {
    res.render("cube/create");
});

router.post("/create", isAuth, async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    const cubeData = {
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
        creator: req.user._id,
    };
    try {
        await createCube(cubeData);

        res.redirect("/");
    } catch (err) {
        const errorMessages = extractErrorMessages(err);
        res.render("cube/create", { errorMessages });
    }
});

router.get("/details/:cubeId", async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await getCube(cubeId).lean();
    const accessories = cube.accessories;
    const hasAccessories = accessories.length;
    let isOwner;

    if (!req.user) {
        isOwner = false;
    } else {
        isOwner = cube.creator._id?.toString() === req.user._id;
    }

    res.render("cube/details", { cube, accessories, hasAccessories, isOwner });
});

router.get("/attach/:cubeId", isAuth, async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await getCube(cubeId).lean();
    const accessories = await getOthers(cube.accessories).lean();
    const hasAccessories = accessories.length > 0;

    res.render("accessory/attach", { cube, accessories, hasAccessories });
});

router.post("/attach/:cubeId", isAuth, (req, res) => {
    const { accessory: accessoryId } = req.body;
    const cubeId = req.params.cubeId;
    attachAccessory(cubeId, accessoryId);

    res.redirect(`/cubes/details/${cubeId}`);
});

router.get("/edit/:cubeId", isAuth, async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await getCube(cubeId).lean();
    const difficultyLevels = difficultyLevelViewData(cube.difficultyLevel);

    res.render("cube/edit", { cube, difficultyLevels });
});

router.post("/edit/:cubeId", isAuth, async (req, res) => {
    const cubeId = req.params.cubeId;
    const { name, description, imageUrl, difficultyLevel } = req.body;
    const data = {
        name,
        description,
        imageUrl,
        difficultyLevel,
    };
    try {
        await editCube(cubeId, data);

        res.redirect(`/cubes/details/${cubeId}`);
    } catch (err) {
        const errorMessages = extractErrorMessages(err);
        res.render("cube/edit", { errorMessages });
    }
});

router.get("/delete/:cubeId", isAuth, async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await getCube(cubeId).lean();
    const difficultyLevels = difficultyLevelViewData(cube.difficultyLevel);

    res.render("cube/delete", { cube, difficultyLevels });
});

router.post("/delete/:cubeId", isAuth, async (req, res) => {
    const cubeId = req.params.cubeId;
    await deleteCube(cubeId);

    res.redirect("/");
});

module.exports = router;
