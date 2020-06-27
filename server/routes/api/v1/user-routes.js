const express = require("express");
const router = express.Router();
const {
  postCreateUser,
  getSampleUsers,
  postLogin,
} = require("../../../controllers/UserController");

router.post("/create-user", postCreateUser);
router.post("/login", postLogin);
router.get("/sample-users", getSampleUsers);

module.exports = router;
