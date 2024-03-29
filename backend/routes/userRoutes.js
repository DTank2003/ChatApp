const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

router.route("/").post(registerUser).get(protect, allUsers);
// router.post("/", registerUser);
router.post("/login", authUser);

module.exports = router;
