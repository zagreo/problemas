import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from '../../modelos/categoria';

import { CategoriasService } from '../../servicios/categorias.service';

@Component({
  selector: 'editorcat',
  template: `
  <form class="border">
    <label for="nombre" style="display:block">Nombre</label>
    <input type="text" name="nombre"
            [(ngModel)]="catedit.nombre"
            placeholder="Nombre de la categoría">
    <label for="descriptor" style="display:block">Descripción</label>
    <textarea name="descriptor" rows="4" cols="20"
            [(ngModel)]="catedit.descriptor" placeholder="Breve descripción de la categoría"></textarea>
    <div>
      <button type="button" class="btn btn-outline-info btn-sm"
            (click)="guardaCategoria()">Guardar</button>
      <button type="button" class="btn btn-outline-info btn-sm"
            (click)="cancelar()">Cancelar</button>
    </div>
  </form>
  `
})
export class EditorcatComponent implements OnInit {

  @Input() public catedit: Categoria;
  @Output() public salida = new EventEmitter<string>();

  nueva: boolean = true;

  constructor( private _catser: CategoriasService ) { }

  ngOnInit() {
    //console.log(this.catedit)
    if(this.catedit._id){this.nueva = false}
  }

  cancelar(){
    if(this.nueva){
      this.salida.emit('cancela0');
    }else{
      this.salida.emit('cancela1');
    }

  }

  guardaCategoria(){

      this._catser.guardaCategoria(this.catedit).subscribe(res=>{
        console.log(res);
        this.salida.emit('guarda');
      });


  }

}
