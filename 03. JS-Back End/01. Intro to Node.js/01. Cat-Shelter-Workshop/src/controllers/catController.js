
function getHome (req , res) {
    res.render('home')
}

function getAddCat(req,res) {
    res.render('addCat')
}

function getAddBreed(req,res) {
    res.render('addBreed')
}

module.exports = {
    getHome,
    getAddCat,
    getAddBreed
}


