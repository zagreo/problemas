export const TipoParametro =["Constante","Variable independiente","Variable dependiente"];

export class Parametro {

  nombre: string;
  tipo: number;
  generador: any;
  //El nombre debería seguir un convenio sencillo; por ejemplo, p+número
  constructor( nombre: string, tipo: number){
    this.nombre=nombre;
    this.tipo=tipo;
  }
}
