// Importando packages
const express = require('express')
const cors = require('cors')
const route = require("./routes/testimonio.routes")
const bodyParser = require('body-parser')
require('dotenv').config();
const Testimonio = require("./controllers/testimonio.controller");
// Conectando a db
const MongoClient = require('./mongo');


// Import env variables
const URL = process.env.DB_URL;
const PORT = process.env.APP_PORT;

// Config app
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.json())
app.use(route)
app.use('/public',express.static(`${__dirname}/storage/images`))
app.listen(PORT, () => console.log(`Servidor iniciado en puerto ${PORT}`))