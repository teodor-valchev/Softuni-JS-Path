const Accessory = require('../models/Accessory');

function getAccessoryPage(req, res){
    res.render('createAccessory');
}

async function createAccessory(req, res){
    const {name, imageUrl, description} = req.body;
    await Accessory.create({name,imageUrl,description});

    res.redirect('/')
}

module.exports = {
    getAccessoryPage,
    createAccessory
}