const {Schema, model} = require("mongoose");

const funkoSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  priceTotal: {
    type: Number,
    requiered: true,
  },
  material: {
    type: String,
    required: true,
  },
  cantidadComprado: {
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
  nombreComprador: {
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
