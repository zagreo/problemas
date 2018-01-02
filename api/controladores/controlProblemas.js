'use strict'

//modelo de Enunciado

var modProblema = require('../modelos/modelProblemas')

function creaProblema(req,res){

  //crea el objeto Problema con el modelo correspondiente
  var oProblema = new modProblema()

  //se obtiene el Problema de la petición (req) POST
  var probReq = req.body;
  oProblema.enunciado= probReq.enunciado;
  oProblema.soluciones= probReq.soluciones;
  oProblema.taxones= probReq.taxones;
  oProblema.parametros= probReq.parametros;
  console.log(oProblema);

  //para crear un Problema al menos hay que pasar el texto del enunciado
  //la fecha de alta se asigna por defecto la actual y los taxones, parámetros y soluciones se dejan vacios(de momento)
  if(oProblema.enunciado.texto){

    oProblema.save((err,probGuardado)=>{
      if (err) {
        res.status(500).send({mensaje: "No ha guardado el Problema"+err});
      }else {
        if (!probGuardado) {
          res.status(404).send({mensaje: "No ha guardado el Problema"});
        }else {
          res.status(200).send({problema: probGuardado});
        }
      }
    })
  }else {
    res.status(200).send({mensaje:'Es necesario un texto para el enunciado del problema'});
  }
}

//método para obtener la colección de problemas de una consulta
//hay que pasar el objeto de la consulta en el cuerpo de la petición
function devProblemas(req,res){

  var datos = req.body;
  var categorias = datos.categorias;
  categorias = categorias.map((cat)=>{return new RegExp("^"+cat+"*")})
  console.log(datos);
  var consulta = {"taxones.path": {$all: categorias}};
  modProblema.find( consulta).skip(datos.inicio).limit(datos.numprob).exec( function(err,problemas){
    if (err) {
      res.status(404).send({mensaje: "No se han encontrado problemas"});
    }else {
      res.status(200).send({ problemas: problemas });
    }
  });
}

//método para obtener la colección de problemas de una consulta
//hay que pasar el objeto de la consulta en el cuerpo de la petición
function cuentaProblemas(req,res){

  var categorias = req.body;
  categorias = categorias.map((cat)=>{return new RegExp("^"+cat+"*")})
  //console.log(categorias);
  var consulta = {"taxones.path": {$all: categorias}};
  modProblema.count( consulta , function(err,numprob){
    if (err) {
      res.status(404).send({numprob: 0});
    }else {
      res.status(200).send({ numprob: numprob });
    }
  });
}

//método para obtener el problema de id dado

function devProblema(req,res){
  //el id es el parámetro de la ruta
  let id = req.params.id;

  modProblema.findById( id , function(err,problema){
    if (err) {
      res.status(404).send({mensaje: "No se han encontrado el problema"});
    }else {
      res.status(200).send({ problema: problema });
    }
  });
}

function cambiaProblema(req,res){
  //el id es el parámetro de la ruta
  let id = req.params.id;

  //crea el objeto Problema con el modelo correspondiente
  // let oProblema = new modProblema()

  //se obtiene el Problema de la petición (req) POST
  let probReq = req.body;
  // probReq.enunciado = JSON.parse(probReq.enunciado);
  console.log(probReq);
  // oProblema.soluciones= probReq.soluciones;
  // oProblema.taxones= probReq.taxones;
  // oProblema.parametros= probReq.parametros;

  modProblema.findByIdAndUpdate( id,  probReq, (err,problema)=>{
    if (err) {
      res.status(500).send({mensaje: "Error al modificar el problema"+err});
    }else {
      if (!problema) {
        res.status(404).send({mensaje: "No se ha modificado el problema"});
      }else {
        res.status(200).send({problema: problema});
      }
    }
  });

}


module.exports = {
  creaProblema,
  devProblemas,
  devProblema,
  cambiaProblema,
  cuentaProblemas
};
