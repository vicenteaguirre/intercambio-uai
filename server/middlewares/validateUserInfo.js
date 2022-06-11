// middleware/validateUserInfo.js
module.exports = (req, res, next) => {

    // función usada más adelante
    const validateEmail = (userEmail) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)
    }

    // 1. destructurar req.body para obtener credenciales
    const { name, email, password } = req.body

   // 2. validaciones para el registro de usuario
    if (req.path === "/register") {
        // 2.1 si alguno de estos valores falta retornamos error
        if (![ name,  email, password].every(Boolean)) {
            return res.status(401).json("Missing credentials")
        } 
        // 2.2 si el email tiene un formato inválido retornamos error
        else if (!validateEmail(email)) {
            return res.status(401).json("Invalid email")
        }
    } 
    
    // 3. validaciones en el acceso (login)
    else if (req.path === "/login") {
        // 3.1 si alguno de estos valores falta retornamos error
        if (![email, password].every(Boolean)) {
            return res.status(401).json("Missing credentials")
        } 
        // 3.2 si el email tiene un formato inválido retornamos error
        else if (!validateEmail(email)) {
            return res.status(401).json("Invalid email")
        }
    }

    // 4. continúa con el pipeline...
    next()
}