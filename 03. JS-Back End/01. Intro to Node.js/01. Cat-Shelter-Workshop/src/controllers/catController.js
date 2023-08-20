const Cat = require('../models/Cat');
const save = require('../models/Breed');

const catsDb = require('../data/db.json');
const breedsDb = require('../data/breedDb.json')

function getHome (req , res) {
    res.render('home',{cats: catsDb.cats});
}

function getAddCat(req,res) {
    res.render('addCat', {breeds: breedsDb});
    console.log(breedsDb);
}

function postAddCat(req,res) {
    const {name, description, upload, breed} = req.body;
    const cat = new Cat(name, description, upload, breed);
    Cat.save(cat);

    res.redirect('/');
}

function getAddBreed(req,res) {
    res.render('addBreed');
}

function postAddBreed(req,res) {
    const breed = req.body.breed
    save(breed)
    
    res.redirect('/')
}

module.exports = {
    getHome,
    getAddCat,
    getAddBreed,
    postAddBreed,
    postAddCat
}


