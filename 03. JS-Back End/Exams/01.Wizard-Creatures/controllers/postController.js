const router = require("express").Router();
const postService = require("../services/postService");
const {extractErrorMsgs} = require("../utils/errorHandler");

router.get("/all", async (req, res) => {
    const creatures = await postService.getAllPosts();
    res.render("all-posts", { creatures });
});

router.get("/create", (req, res) => {
    res.render("create");
});

router.post("/create", async (req, res) => {
    const { name, species, skin, eye, image, description } = req.body;
    const createCreature = {
        name,
        species,
        skin,
        eye,
        image,
        description,
        owner: req.user,
    };
    try {
        await postService.createNewPost(createCreature);
        res.redirect("/posts/all");
    } catch (error) {
        const errorMassages = extractErrorMsgs(error);
        res.status(404).render("create", { errorMassages });
    }
});

router.get("/:creatureId/details", async (req, res) => {
    const { creatureId } = req.params;
    const creature = await postService.getSinglePost(creatureId);
    const { owner } = creature;
    const { user } = req;

    const isOwner = user?._id === owner.toString();

    console.log(isOwner);
    res.render("details", { creature, isOwner });
});

router.get("/:creatureId/edit", async (req, res) => {
    const { creatureId } = req.params;
    const creature = await postService.getSinglePost(creatureId);
    res.render("edit", { creature });
});

router.post("/:creatureId/edit", async (req, res) => {
    const { creatureId } = req.params;
    const { name, species, skin, eye, image, description } = req.body;
    const updatedCreatureData = {
        name,
        species,
        skin,
        eye,
        image,
        description,
    };

    await postService.getSinglePostAndUpdate(creatureId, updatedCreatureData);
    res.redirect(`/posts/${creatureId}/details`);
});

router.get("/:creatureId/delete", async (req, res) => {
    const { creatureId } = req.params;
    await postService.deleteCreature(creatureId);
    res.redirect("/posts/all");
});

router.get("/profile", async (req, res) => {
    const { user } = req;
    const myPosts = await postService.getMyPosts(user._id);

    res.render("my-posts", { myPosts });
});

router.get("/:creatureId/vote", async (req, res) => {
    const { creatureId } = req.params;
    const { _id } = req.user;
    console.log(_id);
    await postService.deleteCreature(creatureId);
    res.redirect(`/posts/${creatureId}/details`);
});

module.exports = router;
