const {Schema, model} = require("mongoose");

const funkoSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    requiered: true,
  },
  material: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  coleccion: {
    type: String,
    required: true,
  },
  funkoImage: {
    type: String,
    required: false,
  },
  des: {
    type: String,
    required: true,
  }
},
  {

    timestamps: true,
    versionKey: false,

  }

);

module.exports = model('Registro', funkoSchema);
