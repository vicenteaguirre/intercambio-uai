// Importando packages
const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const testimonio_router = require("./routes/testimonio.routes")
const login_router = require("./routes/login.routes")
const bodyParser = require('body-parser')
// Conectando a db
const MongoClient = require('./configs/mongo');

// Import env variables
const { PORT } = require('./configs/config');

// Config app
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.json())
app.use(testimonio_router)
app.use(login_router)
app.use('/public',express.static(`${__dirname}/public/images`))
app.listen(PORT, () => console.log(`Servidor iniciado en puerto ${PORT}`))