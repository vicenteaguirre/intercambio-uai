const express = require('express')
const cors = require('cors')
const MongoClient = require('./db.js')
const PORT = process.env.SERVER_PORT
const url = "mongodb+srv://grupo7:internacionaluai@base.zxygi.mongodb.net/db?retryWrites=true&w=majority";

//const pool = require('./db')
const app = express()


app.use(cors())
app.use(express.json())

/*app.get('/', async (req, res) => {
  try {
    MongoClient.printDatabase()
  } catch (err) {
      console.error(err.message)
  }
})*/


app.post("/", (req, res) => {
    console.log("Connected to React");
  });



app.listen(PORT, () => console.log(`Servidor iniciado en puerto ${PORT}`))