const express = require('express');
const router = express.Router();
const Testimonio = require("../controllers/testimonio.controller");
const upload = require('../middleware/upload');



// Create a new Tutorial
router.post("/crear-testimonio", upload.single('image') ,Testimonio.create);
// Obtener todos los testimonios
router.get("/published", Testimonio.findAllPublished);
// Update a Tutorial with id
router.put("/:id", Testimonio.update);
// Delete a Tutorial with id
router.delete("/:id", Testimonio.delete);
// Create a new Tutorial
router.delete("/", Testimonio.deleteAll);

/* Funcionando */
// Create a new Tutorial
router.post("/crear-testimonio", upload.single('image') ,Testimonio.create);
// Obtener un testimonio en especifico
router.get("/testimonio/:id", Testimonio.findOne);
// Retrieve all Tutorials
router.get("/testimonios", Testimonio.findAll);


module.exports = router