require('dotenv').config();
const path = require('path');
const root = process.cwd();

module.exports = {
  rootPath: process.cwd(),
  pjson: require(path.join(root, './package.json')),
  PORT: process.env.PORT || 3111,
  DATABASE_NAME: process.env.DATABASE_NAME || pjson.name,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASS: process.env.DATABASE_PASS,
};
