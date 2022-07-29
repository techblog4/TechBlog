const express = require("express");
const router = express.Router();
const { checkCred, signUp, getName } = require("../controllers/authController");

router.post("/login", checkCred);
router.post("/signup", signUp);
router.get("/:id", getName);

module.exports = router;
