const router = require('express').Router();

const catsController = require('./controllers/catController');

router.get('/', catsController.getHome);

router.get('/cats/add-cat', catsController.getAddCat);

router.get('/cats/edit/:catId', catsController.getCatInfo);

router.get('/cats/add-breed', catsController.getAddBreed);

router.post('/cats/add-breed', catsController.postAddBreed);

router.post('/cats/edit/:catId', catsController.changeCatInfo);

router.post('/cats/delete/:catId', catsController.deleteCat);

router.post('/cats/add-cat', catsController.postAddCat);

module.exports = router;