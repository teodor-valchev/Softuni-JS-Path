const Cube = require('../models/Cube');
const db = require('../config/database.json');

function getHomePage(req, res) {
    res.render('index', {cubes: db.cubes});
}

function getAboutPage(req, res) {
    res.render('about');
}

function getCreateCube(req, res) {
    res.render('create');
}

function postCreateCube(req, res) {
    const {name, description, imageUrl, difficultyLevel} = req.body;
    const cube = new Cube(name, description, imageUrl ,difficultyLevel);
    Cube.save(cube);

    res.redirect('/');
}

module.exports = {
    getHomePage,
    getAboutPage,
    getCreateCube,
    postCreateCube
}