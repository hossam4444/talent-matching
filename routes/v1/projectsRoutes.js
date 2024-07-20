const projectsRouter = require('express').Router();
const projectsControllers = require('../../controllers/projectsController');

projectsRouter
  .get('/', projectsControllers.getAllProjects)
  .get('/:id', projectsControllers.getProject)
  .post('/', projectsControllers.createProject)
  .put('/:id', projectsControllers.updateProject)
  .delete('/:id', projectsControllers.deleteProject);

module.exports = projectsRouter;
