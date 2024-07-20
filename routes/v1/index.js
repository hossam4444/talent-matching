const express = require('express');
const usersRoutes = require('./usersRoutes');
const projectsRouter = require('./projectsRoutes');

const router = express.Router();

// Mounts apartments
router.use('/users', usersRoutes);
router.use('/projects', projectsRouter);

module.exports = router;
