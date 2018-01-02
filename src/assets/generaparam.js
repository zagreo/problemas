
"use strict";
module.exports = {
  //Búsqueda del parametro y sustitución por su valor
  function sustituyeParametro(texto,param,valor){
    return texto.replace("#"+param.nombre,valor);
  }

  //generador de un parámetro libre aleatorio de rango entero a..b
  function gpLibreAl(a,b){
    //no importa el orden pues el rango es el valor absoluto dde la diferencia
    let rango = Math.abs(b-a);
    let min = a<b?a:b;
    return Math.round(rango*Math.random())+min;
  }
}
