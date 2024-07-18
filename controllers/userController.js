const User = require('../models/UserModel');
const factory = require('./handlerFactory');

exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);
exports.createUser = factory.createOne(User);
// Note: We Do't update passwords with this i will create pass reset process instead
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
