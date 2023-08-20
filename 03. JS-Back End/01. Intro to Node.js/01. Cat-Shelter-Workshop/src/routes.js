const router = require('express').Router();

const catsController = require('./controllers/catController')

router.get('/', catsController.getHome)

router.get('/cats/add-cat', catsController.getAddCat)

router.post('/cats/add-cat', catsController.postAddCat)

router.get('/cats/add-breed', catsController.getAddBreed)

router.post('/cats/add-breed', catsController.postAddBreed)

module.exports = router;