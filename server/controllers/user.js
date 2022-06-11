const { User } = require("../models/user");
const {encrypt, jwtGenerator, compare} = require("../help");

// Registrar User
exports.register = async (req, res) => {
    try {
        // 1. destructurar req.body para obtner (name, email, password)
        const { name, email, password } = req.body

        // 2. verificar si el usuario existe (si existe lanzar un error, con throw)
        const user = await User.findOne({"email":email})
        
        //const user = await pool.query("SELECT * FROM users WHERE email = $1", [email])

        if (user != null) {
            return res.status(401).send("Usuario ya existe")
        }

        // 3. Encriptar password usand bCrypt
        bcryptPassword = await encrypt(password)

        // 4. agregar el usuario a la base de datos
        const newUser = new User({
            name: name,
            email: email,
            password: bcryptPassword
        });
        const userStored = await newUser.save()
        res.status(201).send({userStored})

        // Generamos token
        token = jwtGenerator(userStored._id)
        res.json( token )
        
    } catch (err) {
        console.log(err)
        res.status(500).send("Server error")
    }
};


// Verificar User
exports.login = async (req, res) => {
    try {
        // 1. destructurizar req.body
        const { email, password } = req.body
        console.log(email)
        console.log(password)

        // 2. verificar si el usuario no existe (si no emitiremos un error)
        const user = await User.findOne({"email":email})

        if (user == null) {
            return res.status(401).json("Password incorrecta o email no existe")
        }

        // 3. verificar si la clave es la misma que está almacenada en la base de datos
        const validPassword = await compare(password, user.password)
        console.log("plain", password, user.password)
        if (!validPassword) {
            return res.status(401).json("Password incorrecta o email no existe")
        }

        // 4. entregar un token jwt 
        const token = jwtGenerator(user._id)
        console.log("Ingresado.")
        res.json("Token:"+ token )
        
    } catch (err) {
        console.log(err)
        res.status(500).send("Server error")
    }
};

