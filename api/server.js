const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');
const productRouter = require('./products/products-router');

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/products', productRouter);

// eslint-disable-next-line no-unused-vars
server.get('/', (req, res, next) => {
  res.json({api: 'Welcome to home base. Enjoy the ride!'});
});

// eslint-disable-next-line no-unused-vars
server.use('*', (req, res, next) => {
  res.json({api: 'URL not found'});
});

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  res.status(500)
      .json({
        error: err.message,
        stack: err.stack
      });
});

module.exports = server