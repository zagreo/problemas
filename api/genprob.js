'use strict'

var express = require('express');
var bodyParser = require('body-parser');

//servidor
var servProb = express();

//configuración bodyParser
servProb.use(bodyParser.urlencoded({ extended:false }));
servProb.use(bodyParser.json());

//configuración de cabeceras y CORS

servProb.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Rutas
var rutas_problemas = require('./rutas/rutasProblemas');
var rutas_categoria = require('./rutas/rutasCategoria');

//cargar rutas
servProb.use('/proapi',rutas_problemas)
servProb.use('/proapi',rutas_categoria)



module.exports = servProb;
