'use strict'

var mongoose = require('mongoose');
var Esquema = mongoose.Schema;

var esquParametro = Esquema({
  nombre: String,
  tipo: { type: String, enum: ['Libre','Dependiente'] },
  generador: String
});


module.exports = mongoose.model('Parametro',esquParametro);
