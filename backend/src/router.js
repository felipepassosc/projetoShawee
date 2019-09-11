const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController');

//routes for user
router.post('/User', UserController.store);
router.get('/User', UserController.index);
router.get('/User/:id', UserController.show);
router.put('/User/:id', UserController.update);
router.delete('/User/:id', UserController.show);







module.exports = router;