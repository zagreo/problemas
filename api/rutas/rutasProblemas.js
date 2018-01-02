'use strict'

var express = require('express');
var controlProblemas = require('../controladores/controlProblemas');

var apiProblemas = express.Router();

apiProblemas.post('/creaproblema',controlProblemas.creaProblema);
apiProblemas.post('/consultaproblemas',controlProblemas.devProblemas);
apiProblemas.get('/devproblema/:id',controlProblemas.devProblema);
apiProblemas.put('/cmbproblema/:id',controlProblemas.cambiaProblema);
apiProblemas.post('/cuentaproblemas',controlProblemas.cuentaProblemas);


module.exports = apiProblemas;
