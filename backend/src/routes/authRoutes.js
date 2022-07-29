const express = require("express");
const router = express.Router();
const { checkCred, signUp } = require("../controllers/authController");

router.post("/login", checkCred);
router.post("/signup", signUp);

module.exports = router;
