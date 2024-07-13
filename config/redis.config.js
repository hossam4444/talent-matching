const { REDIS_PASS, REDIS_HOST, REDIS_PORT, REDIS_USER } = require("./env.config");

module.exports = {
  pass: REDIS_PASS || null,
  user:REDIS_USER || "default",
  host: REDIS_HOST,
  port: REDIS_PORT,
};
