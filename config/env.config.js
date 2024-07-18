require('dotenv').config();

module.exports = {
  rootPath: process.cwd(),
  PORT: process.env.PORT || 3111,
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASS: process.env.DATABASE_PASS,
};
