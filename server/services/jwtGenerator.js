// JWT GENERATOR
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require('../configs/config');

const jwtGenerator = (userId) => {
    // genera un token jwt para el usuario dado
    if (userId) {
        const payload = {
            user: userId,
        }
        return jwt.sign(payload, JWT_SECRET, { expiresIn: "1hr" })
    }
    return "invalid token"
}

module.exports = { jwtGenerator };