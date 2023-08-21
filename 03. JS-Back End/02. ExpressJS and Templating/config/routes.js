// TODO: Require Controllers...
const cubicController = require('../controllers/cubeController');

module.exports = (app) => {
    app.get('/', cubicController.getHomePage);

    app.get('/about', cubicController.getAboutPage);

    app.get('/create', cubicController.getCreateCube);

    app.post('/create', cubicController.postCreateCube);

    app.get('/details/:cubeId', cubicController.getDetailsPage)
};