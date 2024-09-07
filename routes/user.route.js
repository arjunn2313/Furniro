 const { creatUser, verifyOTP } = require("../controllers/user.controllers");

const router = require("express").Router();

// CREATE USER
router.post("/create",creatUser)
// VERIFY USER
router.post("/verify",verifyOTP)
// GET USERS BY ID
// UPDATE USERS

module.exports = router;
