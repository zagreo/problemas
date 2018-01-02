import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../modelos/categoria';

import { CategoriasService } from '../../servicios/categorias.service';

@Component({
  selector: 'categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input('cat') cat: any;
  @Output() public borrada = new EventEmitter<string>();

  catNueva: Categoria = null;
  editar: boolean = false;
  abierta: boolean = false;

  constructor(private _catser: CategoriasService, private router:Router) {
   }

   ngOnInit(){
     //se cargan las hijas de la categoria
     this._catser.cargaCategoriaHijas(this.cat._id).subscribe(
       (res) => {
         this.cat.hijas = res.hijas;
         //console.log(this.cat)
       });
   }

   refrescar(event){

     if(this.cat._id==event){
       this._catser.cargaCategoriaHijas(this.cat._id).subscribe(
         (res) => {
           this.cat.hijas = res.hijas;
           console.log(this.cat)
         });
     }

   }

   agregarCategoria(){

     this.catNueva = new Categoria(this.cat._id);

   }

   cancelaEditor(event){
     if(event=="cancela1"){
       this.editar = false;
     }else{
       this.catNueva = null;
       if(event=='guarda'){
         this._catser.cargaCategoriaHijas(this.cat._id).subscribe(
           (res) => {
             this.cat.hijas = res.hijas;
             this.editar = false;
             console.log(this.cat);
           });
       }

     }


   }


  eliminaCategoria(){
    if(confirm("Se va a eliminar la categoria "+this.cat.nombre+" y todas las que dependen de ella. Piénsalo bien.")){

      this._catser.eliminaCategoria(this.cat._id).subscribe(
        (res) => {
          console.log(res);
          this.borrada.emit( this.cat.parent );
        }
      )

    }
  }
}
