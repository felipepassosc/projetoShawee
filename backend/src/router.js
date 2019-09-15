const express = require('express');
const router = express.Router();

const HelpController = require('./controllers/HelpController');
const UserController = require('./controllers/UserController');
const AnswerController = require('./controllers/AnswerController');
const LikeController = require('./controllers/LikeController');

//routes for user
router.post('/User', UserController.store);
router.get('/Users', UserController.index);
router.get('/User/:id', UserController.show);
router.put('/User/:id', UserController.update);
router.delete('/User/:id', UserController.show);
//routes for help
router.post('/Help', HelpController.store);
router.get('/Helps', HelpController.index);
//routes for answer
router.post('/Answer/:idHelp', AnswerController.store);
router.get('/Answers/:idhelp', AnswerController.index)
//routes for like and dislike
router.post('/Like/:model/:id', LikeController.store);



module.exports = router;