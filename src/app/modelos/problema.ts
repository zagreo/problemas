export class cContexto {
  texto: string;
  alta: any;
  fuente: string;
}
export class Problema {
  _id?: string;
  enunciado: cContexto;
  soluciones: cContexto[];
  //matrices con los ids de los items que correspondan de las colecciones respectivas
  taxones: any[];
  parametros: string[];
  //Para definir un Problema basta con el texto del enunciado
  constructor( texto: string, fuente: string = "Zagreus"){
    this.enunciado = new cContexto();
    this.enunciado.texto=texto;
    this.enunciado.fuente=fuente;
    this.enunciado.alta=new Date();
    this.soluciones=[];
    this.taxones=[];
    this.parametros=[];
  }
}
