// middleware/authorization.js
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../configs/config")

// middleware de validación del token
module.exports = async (req, res, next) => {
    try {
        // 1. obtiene el token del header del request
        const jwToken = req.header("token")
        console.log(req.header.token)
        // 2. si no hay token presente es un error
        if (!jwToken) {
            return res.status(403).json("No autorizado")
        }

        // 3. valida el token y obtiene el payload, si falla tirará una excepción
        const payload = jwt.verify(jwToken, JWT_SECRET)

        // 4. rescatamos el payload y lo dejamos en req.user
        req.user = payload.user

        // 5. continua la ejecución del pipeline
        next()
    } catch (err) {
        console.error(err.message)
        return res.status(403).json("No autorizado")
    }
}

