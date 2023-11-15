const express = require("express");
const {
  _getAllUsers,
  _getUser,
  _register,
  _login,
  _updateUser,
} = require("./controller.js");

const router = express.Router();

router.get("/users", _getAllUsers);
router.get("users/:id", _getUser);
router.post("/register", _register);
router.post("/login", _login);
router.put("users/:id", _updateUser);

module.exports = router;
