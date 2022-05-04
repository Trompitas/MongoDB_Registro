const express = require("express");
const funkoschema = require("../models/funkoM");

const router = express.Router();

// create funko
router.post("/funkos", (req, res) => {
  const funko = funkoschema(req.body);

  funko
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all funkos
router.get("/funkos", (req, res) => {
  funkoschema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a funko
router.get("/funkos/:id", (req, res) => {
  const { id } = req.params;
  funkoschema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a funko
router.delete("/funkos/:id", (req, res) => {
  const { id } = req.params;
  funkoschema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
