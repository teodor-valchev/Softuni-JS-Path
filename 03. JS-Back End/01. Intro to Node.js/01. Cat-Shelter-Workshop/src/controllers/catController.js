const Cat = require('../models/Cat');
const catsDb = require('../data/db.json')  

function getHome (req , res) {
    res.render('home',{cats: catsDb.cats})
}

function getAddCat(req,res) {
    res.render('addCat')
}

function postAddCat(req,res) {
    const {name, description, upload, breed} = req.body;
    const cat = new Cat(name, description, upload, breed);
    Cat.save(cat);

    res.redirect('/');
}

function getAddBreed(req,res) {
    res.render('addBreed')
}

function postAddBreed(req,res) {
    console.log(req.body);
}

module.exports = {
    getHome,
    getAddCat,
    getAddBreed,
    postAddBreed,
    postAddCat
}


