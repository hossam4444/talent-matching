require("dotenv").config();
const path = require("path");
const root = process.cwd();

module.exports = {
  rootPath: process.cwd(),
  pjson: require(path.join(root, "./package.json")),
  PORT: process.env.PORT || 3111,
  DATABASE_NAME: process.env.DATABASE_NAME || pjson.name,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PORT: process.env.DATABASE_PORT,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASS: process.env.DATABASE_PASS,
  REDIS_PASS: process.env.REDIS_PASS,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_USER: process.env.REDIS_USER
};
