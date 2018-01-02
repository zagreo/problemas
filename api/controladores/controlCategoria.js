'use strict'

var mongoose = require('mongoose');

//modelo de Categoria

var modCategoria = require('../modelos/modelCategoria')

//Método para guardar una categoría

function guardaCategoria(req,res){

  //crea el objeto Categoria con el modelo correspondiente
  var categoria = new modCategoria()

  //se obtienen los valores pasados por el Post
  var valEnv = req.body;
  //console.log(valEnv);
  //para definir una categoria basta con pasar el nombre de la misma y su madre

  if( valEnv.nombre ){
    categoria.nombre = valEnv.nombre;
    categoria.descriptor = valEnv.descriptor;
    if( valEnv.parent ) {
      categoria.parent = valEnv.parent;
      //console.log(categoria.parent);
    }
    //antes de guardar hay que comprobar que no existe una categoria con el mismo nombre y la misma madre
    modCategoria.findOne({ nombre: categoria.nombre, parent: categoria.parent },(err,catdup)=>{
      if(catdup){
        res.status(200).send({mensaje: 'Ya existe esta categoría'});
      }else {
        categoria.save((err,catGuardada)=>{
          if (err) {
            res.status(500).send({mensaje: "No ha guardado la categoría"});
          }else {
            if (catGuardada) {
              res.status(200).send({categoria: catGuardada});
            }else {
              res.status(404).send({mensaje: "No ha guardado la categoría"});
            }
          }
        });
      }
    });
  }else {
    res.status(200).send({mensaje: 'Es necesario un nombre para la categoría'});
  }
}

//Método para actualizar una categoría

function actualizaCategoria(req,res){
    //la ruta debe tener como parámetro el id de la categoría
    var id = req.params.id;
    //se obtienen la categoria pasada en el cuerpo de la petición
    var catEnv = req.body;

    modCategoria.findByIdAndUpdate( id, catEnv,{new: true}, (err,catactual)=>{
      if(err){
        res.status(500).send({mensaje: "Error al actualizar la categoría"});
      }else {
        if (catactual) {
          res.status(200).send({categoria: catactual});
        }else {
          res.status(404).send({mensaje: "No se ha podido actualizar la categoría"});
        }
      }
    } );
}

//método para obtener la categoria raíz, que es aquella que carece de propiedad parent y cuya propiedad _id es igual al path
//en caso de que no exista se crea.

function creArbol( req, res ){
  const idraiz = new mongoose.mongo.ObjectId('56cb91bdc3464f14678934ca');
  //consulta para obtener la categoría raíz
  modCategoria.findById( idraiz ,(err,raiz)=>{
    if(err){
      res.status(404).send({mensaje: "Error al acceder a la BB DD"});
    }else {
        if(raiz){
          raiz.getImmediateChildren({}, function(error, children) {

            res.status(200).send({categoria: raiz });

          });
        }else {
          var raiz = new modCategoria();
          raiz._id = idraiz;
          raiz.nombre = "Raíz";
          raiz.descriptor = "Raiz del árbol de categorías";
          raiz.path = '56cb91bdc3464f14678934ca'
          raiz.save((err, catraiz)=>{
            if (err) {
              res.status(500).send({mensaje: "No se ha creado la categoría raíz"});
            }else {
              if (catraiz) {
                res.status(200).send({categoria: catraiz});
              }else {
                res.status(404).send({mensaje: "No se ha creado la categoría raíz"});
              }
            }
          })
        }
    }
  })

}

//método para obtener una categoría
//la ruta debe tener como parámetro el id de la categoría
function devCategoria(req,res){
  var id = req.params.id;
  modCategoria.findById( id, function(err,categoria){
    if (err) {
      res.status(404).send({mensaje: "No se ha encontrado la categoría"});
    }else {
      res.status(200).send({ categoria: categoria });
    }
  });
}

//método para obtener las subcategorias de una dada

function devCategoriaHijas(req,res){
  var id = req.params.id;
  modCategoria.findById( id, function(err,categoria){
    if (err) {
      res.status(404).send({mensaje: "No se ha encontrado la categoría"});
    }else {
      if(categoria){
        //método para obtener la matriz de sus hijos
        categoria.getImmediateChildren({}, function(error, children) {
          if(error){
            res.status(200).send({ hijas: [] });
          }else{
            if(children){
              res.status(200).send({ hijas: children });
            }else {
              res.status(200).send({ hijas: []});
            }

          }

        });
      }
    }
  });
}

//método para borrar una categoría
//la ruta debe tener como parámetro el id de la categoría a eliminar, el path tiene un símbolo # que se usa para referencias en la misma pag.

function eliminaCategoria(req,res){
  //obtenemos el id de la Categoria a eliminar
  var id = req.params.id;

  //Con la opción onDelete=DELETE borra los hijos

  modCategoria.remove({ _id: id },(err)=>{
    if(err){
      res.status(404).send({mensaje: "No se ha encontrado la categoría"});
    }else{
      res.status(200).send({mensaje: "Se ha eliminado la categoría: "+id});
    }
  })
}



module.exports = {
  guardaCategoria,
  actualizaCategoria,
  devCategoria,
  devCategoriaHijas,
  creArbol,
  eliminaCategoria
};
