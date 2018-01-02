import { Parametro } from '../modelos/parametro';
import { Problema } from '../modelos/problema';

export class Instancia {

  private problema: Problema;
  private valores: any[] =[];


  constructor( problema: Problema){

    this.problema=problema;
    this.generaValores();
  }

  //Búsqueda del parametro y sustitución por su valor
  sustituyeParametro(texto,param,valor){
    return texto.split("#"+param).join(valor);
  }

  //generador de un parámetro libre aleatorio de rango entero a..b
  varAleatoria(a,b,i){
    //no importa el orden pues el rango es el valor absoluto dde la diferencia
    let rango = Math.abs(b-a);
    let min = a<b?a:b;
    //si i=1 son números enteros
    return i*Math.round(rango*Math.random()/i)+min;
  }

  //función para obtener el valor de un parametro:
  evalua(param){
    //dependiendo del tipo se utiliza un evaluador distintos
    switch(param.tipo){

      case "0":
        //si se trata de una Constante su valor está en el generador
        return param.generador;

      case "1":
        //dependiendo de como sea el modo el generador tendremos distintos formas de generar el valor
        switch(param.generador.modo){
          case 0://aleatorio
            //si el rango del generador es una matriz, se obtiene un elemento aleatorio
            if(Array.isArray(param.generador.dominio)){
              return param.generador.dominio[Math.floor(Math.random()*param.generador.dominio.length)];
            }else{
              //en caso contrario se trata de un número aleatorio
              //console.log(param)
              return this.varAleatoria(parseFloat(param.generador.min),parseFloat(param.generador.max),parseFloat(param.generador.in));
            }
          case 1://secuencial
            return param.generador.rango[0] //hay que mantener un puntero al último valor elegido localstorage? o en la propia matriz de valores
        }

      case "2": //variable dependiente
        //se sustituyen los valores de los argumentos constantes o independientes que se deben evaluar antes
        let expres: any = param.generador.func;
        this.valores.forEach((val,i)=>{
          expres = expres.replace("#p"+i,val);
        })
        try {

          return eval(expres);
        }catch (e) {
            // sentencias para manejar cualquier excepción
            console.log(e); // pasa el objeto de la excepción al manejador de errores
            console.log(expres);
            return expres;
        }


      default:
        return param.tipo;

    }

  }
  //función que genera los valores de cada parametro
  generaValores(){
    this.problema.parametros.forEach((parametro,i)=>{
      this.valores[i] = this.evalua(parametro);
    });
    //console.log(this.valores);
  }

  //devuelve una instancia del enunciado con los valores generados
  devInstanciaEnunciado(){
    let enunciado: string = this.problema.enunciado.texto;
    this.problema.parametros.forEach((param,i)=>{
      //console.log(param);
      enunciado = this.sustituyeParametro(enunciado,param['nombre'],this.valores[i]);
    });

    return enunciado;
  }

  //devuelve una instancia de la solución dada por el índice sol con los valores generados
  devInstanciaSol(insol: number){
    let textosol: string = this.problema.soluciones[insol].texto;
    this.problema.parametros.forEach((param,i)=>{
      //console.log(param);
      textosol = this.sustituyeParametro(textosol,param['nombre'],this.valores[i]);
    });

    return textosol;
  }

  //funciones para matrices
  //código Latex
  matrizTex(matriz: string){
    let mtrz: any[] = JSON.parse(matriz);
    let codigo: string = "\\begin{pmatrix} ";
    mtrz.forEach((fila)=>{
      fila.forEach((elemento)=>{
        codigo = codigo + elemento+" & ";
      });
      codigo = codigo.slice(0,-2) + "\\\\";
    });
    // console.log(codigo.slice(0,-2) + "\\end{pmatrix}");
    return codigo.slice(0,-2) + "\\end{pmatrix}";
  }
  //generar una matriz de orden nxm con elementos aleatorios
  matrizAleatoria(n: number, m: number, rango: any){
    let matriz: any[] = [];
    for(let i=0;i<n;i++){
      matriz.push(this.vectorAleatorio(m,rango));
    }
    return matriz;
  }

  //generar una vector de orden n con elementos aleatorios
  vectorAleatorio(n: number,rango){
    let vector: any[] = [];
    for(let i=0;i<n;i++){
      vector.push(this.varAleatoria(rango.min,rango.max,rango.in))
    }
    return vector;
  }

}
