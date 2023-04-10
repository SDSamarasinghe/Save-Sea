const express = require("express");
const {
  registerUser,
  removeUser,
  loginUser,
  getUser,
  currentUser,
} = require("../controllers/UserManagerControllers");

const router = express.Router();

router.post("/sign-up", registerUser);
router.get("/all", getUser);
router.delete("/:id", removeUser);
router.post("/login", loginUser);
router.get("/current", currentUser);

module.exports = router;
