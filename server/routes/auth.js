const router = require('express').Router();
const User = require("../controllers/user");
const validateUserInfo = require("../middlewares/validateUserInfo")
const authorization = require("../middlewares/authorization");

// Registrar User
router.post("/register", User.register)

// Verificar User
router.post("/login", validateUserInfo, User.login)

router.get("/verify", authorization, async (req, res) => {
    try {
        res.json(true)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
 })

module.exports = router