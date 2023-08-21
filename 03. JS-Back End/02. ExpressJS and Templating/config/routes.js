// TODO: Require Controllers...
const cubicController = require('../controllers/cubeController');

module.exports = (app) => {
    app.get('/', cubicController.getHomePage);

    app.get('/about', cubicController.getAboutPage)
};