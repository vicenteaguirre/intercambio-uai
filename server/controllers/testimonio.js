const {Testimonio, setImageProfile} = require("../models/testimonio");


// Update a Tutorial by the id in the request
exports.update = async (req, res) => {
  try{
    console.log("Update")
    const id = req.params.id;
    const query = {
      state: req.body.state,
    }
    const testimonioUpdated = await Testimonio.findByIdAndUpdate(id,query); 
    res.status(201).send("Se actualizo el testimonio de "+ testimonioUpdated.nombre_completo);

  } catch (e){
    res.status(500).send({message: e.message || "Some error occurred while updating the Testimonio."})
  }
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = async (req, res) => {
  try{
    console.log("Delete")
    const id = req.params.id;
    const testimonioUpdated = await Testimonio.findByIdAndDelete(id); 
    res.status(201).send("Se actualizo el testimonio de "+ testimonioUpdated.nombre_completo);

  } catch (e){
    res.status(500).send({message: e.message || "Some error occurred while updating the Testimonio."})
  }
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};

/////// Funcionando /////////

// Create and Save a new Tutorial
exports.create = async (req, res) => {
  try{
   // Validate request
    console.log(req.body.nombre_completo);
    // Create a Tutorial
    const testimonio = new Testimonio({
      nombre_completo: req.body.nombre_completo,
      edad: req.body.edad,
      state: "unpublished"
    });

    if(req.file) {
      const {filename} = req.file;
      testimonio.imageProfile = setImageProfile(filename);
      //testimonio.setImageProfile(filename);
    }

    // Save Tutorial in the database
    const testimonioStored = await testimonio.save()
    res.status(201).send({testimonioStored})
  } catch (e){
    res.status(500).send({message: e.message || "Some error occurred while creating the Testimonio."})
  }
};

// Obtiene todo 
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
        res.status(404).send({ message: "Not found testimony with id: " + id });
      else {
        res.send(data);
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

// Testimonio 
exports.findUAI = (req, res) => {
  Testimonio.find({"state":"published","u_destino":{$ne: "UAI"}})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found testimony with id: " + id });
      else {
        res.send(data);
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id="});
    });
};
exports.findInter= (req, res) => {
  Testimonio.find({"state":"published","u_destino":"UAI"})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found testimony with id: " + id });
      else {
        res.send(data);
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id="});
    });
};


exports.findUnpublished = (req, res) => {
  Testimonio.find({"state":"unpublished"})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found testimony with id: " + id });
      else {
        res.send(data);
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id="});
    });
};