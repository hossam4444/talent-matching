const {
  DATABASE_NAME,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASS,
} = require("./env.config");

module.exports = {
  db: DATABASE_NAME,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  user: DATABASE_USER,
  pass: DATABASE_PASS,
};
