
function getHomePage(req, res) {
    res.render('index')
}

function getAboutPage(req, res) {
    res.render('about')
}

module.exports = {
    getHomePage,
    getAboutPage
}