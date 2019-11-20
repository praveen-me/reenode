const express = require("express");
const router = express.Router();

const userController = require("./../../controllers/user.controller");

/* GET home page. */
router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.get("/verifyuser", userController.verifyUser);

router.get("/ping", (_, res) =>
  res.json({
    msg: "pong"
  })
);

module.exports = router;
