const { default: mongoose, connection } = require("mongoose");
const mongoURI = require("./utils/mongoURI");
const mongoConfig = require("../config/mongo.config");

module.exports = {
  connect: async () => {
    try {
      await mongoose.connect(mongoURI(mongoConfig));
      if (connection.readyState)
        console.log("Mongoose connected to", connection.name);
    } catch (error) {
      console.error("MongoDB connection failed!", error);
    }
  },
};
