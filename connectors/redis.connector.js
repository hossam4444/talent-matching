const { createClient } = require('redis');
const redisConfig = require('../config/redis.config');
const redisURI = require('./utils/redisURI');

module.exports = {
  connect: async () => {
    try {
      let client;

      if (redisConfig.pass) {
        const url = redisURI(redisConfig);
        client = createClient({ url });
      } else client = createClient();
      await client.connect();
      console.log('Redis client connected.');
    } catch (error) {
      console.error('Redis client error:', error);
    }
  },
  disconnect: async (client) => {
    await client.disconnect();
  },
};
