'use strict'

var express = require('express');
var controlCategoria = require('../controladores/controlCategoria');

var apiCat = express.Router();

apiCat.post('/grdcategoria',controlCategoria.guardaCategoria);
apiCat.put('/actcategoria/:id',controlCategoria.actualizaCategoria);
apiCat.get('/devcategoria/:id',controlCategoria.devCategoria);
apiCat.get('/devcategoriahijas/:id',controlCategoria.devCategoriaHijas);
apiCat.get('/devarbol',controlCategoria.creArbol);
apiCat.delete('/elmcategoria/:id',controlCategoria.eliminaCategoria);

module.exports = apiCat;
