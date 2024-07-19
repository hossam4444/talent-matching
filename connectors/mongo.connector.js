const mongoose = require('mongoose');
const { URI } = require('../config/mongo.config');

module.exports = {
  connect: async () => {
    try {
      const DB = URI.replace('<DATABASE_USER>', DATABASE_USER)
        .replace('<PASSWORD>', DATABASE_PASSWORD)
        .replace('<DATABASE_NAME>', DATABASE_NAME);
        console.log(DB);
      await mongoose.connect(DB);
      console.log('DB connected successfuly!');
    } catch (error) {
      console.error('DB connection failed!');
    }
  },

  disconnect: async () => {
    try {
      await mongoose.disconnect();
      console.log('DB disconnected successfuly!');
    } catch (error) {
      console.error('DB disconnection failed!');
    }
  },
};
