'use strict'

var mongoose = require('mongoose');
var tree = require('mongoose-mpath');

var Esquema = mongoose.Schema;

var esqueCategoria = Esquema({
  nombre: String,
  descriptor: String
});

//el plugin añade los campos parent y path
esqueCategoria.plugin(tree,{ onDelete: 'DELETE'});

module.exports = mongoose.model('Categoria',esqueCategoria);
