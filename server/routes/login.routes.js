const express = require('express');
const router = express.Router();
const User = require("../controllers/user.controller");

// Registrar User
router.post("/register", User.register)

// Verificar User
router.post("/login", User.login)

module.exports = router

