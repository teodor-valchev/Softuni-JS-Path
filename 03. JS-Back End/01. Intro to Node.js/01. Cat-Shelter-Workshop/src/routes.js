const router = require('express').Router();

const catsController = require('./controllers/catController')

router.get('/', catsController.getHome)

router.get('/cats/add-cat', catsController.getAddCat)

router.get('/cats/add-breed', catsController.getAddBreed)

module.exports = router;