'use strict'

var mongoose = require('mongoose');

var servProb = require('./genprob');
var puerto = process.env.PORT || 3800;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Repositorio',{useMongoClient:true})
  .then(
    () =>{
      servProb.listen( puerto, ()=>{
        console.log('guay...');
      })
    }
  )
  .catch( err => console.log(err) );
