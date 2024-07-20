const Project = require('../models/Project');
const factory = require('./handlerFactory');

exports.getProject = factory.getOne(Project);
exports.getAllProjects = factory.getAllPagination(Project);
exports.createProject = factory.createOne(Project);
exports.updateProject = factory.updateOne(Project);
exports.deleteProject = factory.deleteOne(Project);
