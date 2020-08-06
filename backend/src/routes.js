const express = require('express');
const SessionController = require('./controllers/SessionController');
const TodoController = require('./controllers/TodoController');
const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.post('/register', SessionController.register);
routes.post('/authenticate', SessionController.authenticate);

routes.get('/todos', authMiddleware, TodoController.index);
routes.post('/todos', authMiddleware, TodoController.store);
routes.delete('/todos/:id', authMiddleware, TodoController.destroy);

module.exports = routes;
