require('dotenv').config();

module.exports = {
  pass: process.env.REDIS_PASS || null,
  user: process.env.REDIS_USER || 'default',
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
};
