const {Router} = require('express');
const router = Router();

const {verifyToken} = require('../middlewares/auth.handler');

const {getAll,create,deleteOne} = require('../controllers/category.controller');

router.route('/')
    .get(verifyToken,getAll)
    .post(create)

router.route('/:id')
    .delete(deleteOne)

module.exports = router;