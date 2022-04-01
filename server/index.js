const express = require('express')
const cors = require('cors')
//const pool = require('./db')
const app = express()

const PORT = process.env.SERVER_PORT

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    res.send('Hello World!')
    
})

app.post("/", (req, res) => {
    console.log("Connected to React");
  });


app.listen(PORT, () => console.log(`Servidor iniciado en puerto ${PORT}`))