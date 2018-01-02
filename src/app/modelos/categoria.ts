export class Categoria {
  _id?: string;
  nombre: string;
  descriptor: string;
  parent?: string;
  path?: string;
  hijas?: any[];
  constructor( parent, nombre: string="", descriptor: string=""){
    this.nombre=nombre;
    this.descriptor=descriptor;
    this.parent=parent;
  }
}
