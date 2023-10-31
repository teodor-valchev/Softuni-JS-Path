const router = require("express").Router();
const electroncicService = require("../services/electronic");
const errorHelper = require("../helpers/errorHelper");

//dynamic rendering of the electronics
router.get("/catalog", async (req, res) => {
    const electronics = await electroncicService.getAllElectronics();
    res.render("catalog", { electronics });
});

router.get("/create", (req, res) => {
    res.render("create");
});

//DONT FORGET ERROR HANDLING
router.post("/create", async (req, res) => {
    try {
        const {
            name,
            type,
            production,
            exploitation,
            damages,
            image,
            price,
            description,
        } = req.body;
        const { user } = req;
        const electronicData = {
            name,
            type,
            production,
            exploitation,
            damages,
            image,
            price,
            description,
            owner: user,
        };
        await electroncicService.createElectronic(electronicData);
        res.redirect("/offers/catalog");
    } catch (error) {
        const errorMessages = errorHelper.getErrorMsgs(error);
        res.status(404).render("create", { errorMessages });
    }
});

router.get("/details/:electronicID", async (req, res) => {
    const { electronicID } = req.params;
    const { _id } = req.user;
    const electronic = await electroncicService.getSingleElectronic(
        electronicID
    );
    const isOwnerOfItem = _id === electronic.owner._id.toString();

    res.render(`details`, { electronic, isOwnerOfItem });
});

router.get("/edit/:electronicID", async (req, res) => {
    const { electronicID } = req.params;
    const electronic = await electroncicService.getSingleElectronic(
        electronicID
    );

    res.render(`edit`, { electronic });
});

router.post("/edit/:electronicID", async (req, res) => {
    const { electronicID } = req.params;
    const {
        name,
        type,
        production,
        exploitation,
        damages,
        image,
        price,
        description,
    } = req.body;
    const updateData = {
        name,
        type,
        production,
        exploitation,
        damages,
        image,
        price,
        description,
    };
    await electroncicService.updateElectronic(electronicID, updateData);

    res.redirect(`/offers/details/${electronicID}`);
});

router.get("/delete/:electronicID", async (req, res) => {
    const { electronicID } = req.query;
    await electroncicService.deleteElectronic(electronicID);

    res.redirect("/offers/catalog");
});

router.get("/search", async (req, res) => {
    const { search, type } = req.query;

    let electronics = await electroncicService.getAllElectronics();

    if (search) {
        electronics = electronics.filter((e) =>
            e.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (type) {
        electronics = electronics.filter(
            e.name.toLowerCase().includes(type.toLowerCase())
        );
    }

    res.render("search", { electronics });
});

module.exports = router;
