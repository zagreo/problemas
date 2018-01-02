'use strict'

var mongoose = require('mongoose');
var Esquema = mongoose.Schema;

var esquProblema = Esquema({
  enunciado: {
    texto: String,
    alta: { type: Date, default: Date.now },
    fuente: { type: String, default: "Zagreus" }
  },
  soluciones: [{
    texto: String,
    alta: { type: Date, default: Date.now },
    fuente: String
  }],
  taxones:[Esquema.Types.Mixed],
  parametros:[Esquema.Types.Mixed]
});

module.exports = mongoose.model('Problema',esquProblema);
