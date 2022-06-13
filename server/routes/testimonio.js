const router = require('express').Router();
const Testimonio = require("../controllers/testimonio");
const upload = require('../middlewares/upload');
const authorization = require("../middlewares/authorization");


//*** Public  ***/

// Crear un testimonio
router.post("/crear-testimonio", upload.single('image') ,Testimonio.create);
// Obtener un testimonio en especifico
router.get("/testimonio/:id", Testimonio.findOne);
// Obtenemos los testimonios publicados
router.get("/testimonios-uai", Testimonio.findUAI);
router.get("/testimonios-inter", Testimonio.findInter);

//*** Admin  ***/

// Obtenemos los testimonios no publicados
router.get("/admin", Testimonio.findUnpublished)
//router.get("/admin/private", authorization, Testimonio.findUnpublished)

// Publicar testimonios
//router.update("admin/up/:id", authorization, Testimonio)
// Bajar testimonios
//router.update("admin/down/:id", authorization, Testimonio)
// Eliminar testimonios
//router.delete("admin/delete/:id", authorization, Testimonio)



module.exports = router