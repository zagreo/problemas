export interface Categoria{

  id: string;
  path: string;
  nombre: string;
  descriptor: string;
  parent?: string;
  //hijas: Categoria[];
  abierta:boolean;

}
