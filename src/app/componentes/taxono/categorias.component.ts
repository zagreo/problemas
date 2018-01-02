import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Categoria } from '../../modelos/categoria';
import { CategoriasService } from '../../servicios/categorias.service';

@Component({
  selector: 'categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  @Input('categorias') categorias: any [];
  @Output('cambio') cambio = new EventEmitter<boolean>();
  agregacat: boolean = false;

  constructor( private _catserv: CategoriasService ) { }

  ngOnInit() {
  }

  asignaCategoria(cat){
    //solo vamos a guardar el id de la categoria, su nombre, path y parent
    let catasignada = { _id: cat._id, nombre: cat.nombre, parent: cat.parent, path:cat.path };
    //antes de añadir una categoría hay que comprobar si existe una que sea ancestro de de la nueva
    //el _id de la categoría está en el path de la nueva
    var ancestro: number = -1;
    if(this.categorias.some((categoria,i)=>{
      if(cat.path.indexOf(categoria._id)!=-1){
        ancestro = i;
        return true;
      }else{
        return false
      }
    })){
      this.categorias[ancestro] = catasignada;
    }else{
      this.categorias.push(catasignada);
    }
    this.cambio.emit(true);
    console.log(this.categorias);

  }
}
