const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

// const redisConnector = require('./connectors/redis.connector');
const apiRoutes = require('./routes/index');

// Start express app
const app = express();

// connectors
// redisConnector.connect();

// GLOBAL MIDDLEWARES

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// loaders

// 3) ROUTES
app.use('/api', apiRoutes);

app.all('*', (req, res, next) => {
  next(
    res.status(404).json({
      message: `that rout not found ${req.url} `,
    }),
  );
});

module.exports = app;
