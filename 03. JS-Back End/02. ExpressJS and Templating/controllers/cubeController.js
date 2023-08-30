
const Cube = require('../models/Cube');

async function getHomePage(req, res) {
    const {search, from: difficultyFrom, to: difficultyTo } = req.query;

    let cubes = await Cube.find().lean();

    if (search) {
        cubes = cubes.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (difficultyFrom) {
        cubes = cubes.filter(c => c.difficultyLevel >= difficultyFrom);
    }

    if (difficultyTo) {
        cubes = cubes.filter(c => c.difficultyLevel <= difficultyTo);
    }

    res.render('index', { cubes, search, difficultyFrom , difficultyTo });
}

function getAboutPage(req, res) {
    res.render('about');
}

function getCreateCube(req, res) {
    res.render('create');
}

async function postCreateCube(req, res) {
    const {name, description, imageUrl, difficultyLevel} = req.body;
    const cube = new Cube({name, description, imageUrl , difficultyLevel});
    await cube.save();

    res.redirect('/');
}

async function getDetailsPage(req, res) {
    const cubeId = req.params.cubeId;
    const cube = await Cube.findById(cubeId);

    if (!cube) {
        res.render('404');
        return;
    }

    res.render('details', { cube });
}

module.exports = {
    getHomePage,
    getAboutPage,
    getCreateCube,
    postCreateCube,
    getDetailsPage,
}