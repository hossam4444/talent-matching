const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("users routes");
});

module.exports = { router, path: "users" };
