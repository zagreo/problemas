export interface Problema {

  id: number;
  enunciado: string;
  taxones: string[];//lista de códigos de las categorias atribuidas al Problema
  parametros:any[];//lista de objetos parámetros
  soluciones:any[];

}
