// JWT GENERATOR
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require('./configs/config');
const jwtSecret = JWT_SECRET
const jwtGenerator = (userId) => {
    // genera un token jwt para el usuario dado
    if (userId) {
        const payload = {
            user: userId,
        }
        return jwt.sign(payload, jwtSecret, { expiresIn: "1hr" })
    }
    return "invalid token"
}

// ENCRYPT PASSWORD
const bcrypt = require("bcrypt")

const encrypt = async (password) => {
    //  Encriptar password usand bCrypt
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)
    const bcryptPassword = await bcrypt.hash(password, salt)
    return bcryptPassword
}

// CHECK PASSWORD
const compare = async (plainPassword, password) => {
    return await bcrypt.compare(plainPassword, password)
}

module.exports = {encrypt, jwtGenerator, compare};