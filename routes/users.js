var express = require('express');
var router = express.Router();
const usersRouter = require('../controllers/userscontroller')


/* GET users listing. */
router.get('/', usersRouter.index)
// Router.get('/flights/new', usersController.new)
// Router.get('/:id', usersController.show)
// Router.post('/flights/new', usersController.create);

// router.post('/testing', usersController.testing );
// router.post('/new', usersController.newFLight);
// router.get('/show', usersController.showFlights);
// router.get('/new', usersController.newForm);
module.exports = router;
