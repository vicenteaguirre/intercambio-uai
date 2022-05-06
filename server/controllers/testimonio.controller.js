const Testimonio = require("../model/testimonio");
// Create and Save a new Tutorial


exports.create = async (req, res) => {
  try{
   // Validate request
    
    // Create a Tutorial
    const testimonio = new Testimonio({
      nombre_completo: req.body.nombre_completo,
      edad: req.body.edad,
      u_destino: req.body.u_destino,
      pais: req.body.pais,
      testimonio: req.body.testimonio
    });

    if(req.file) {
      const {filename} = req.file;
      testimonio.setImageProfile(filename);
    }

    // Save Tutorial in the database
    const testimonioSotred = await testimonio.save()
    res.status(201).send({testimonioSotred})
  } catch (e){
    res.status(500).send({message: e.message || "Some error occurred while creating the Testimonio."})
  }
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Testimonio.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Testimonio.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};

