const express = require('express');
const UserController = require('./controllers/UserController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');
const routes = express.Router();

// routes.get('/', (req, res) => {
//     return res.json({ message: `Olá ${req.query.name}`});
// });
routes.get('/users', UserController.index);

routes.post('/register', UserController.store);
routes.post('/user/:userId/like', LikeController.store);
routes.post('/user/:userId/dislike', DislikeController.store);

module.exports = routes;
