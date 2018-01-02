import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CategoriasService } from '../../servicios/categorias.service';

@Component({
  selector: 'navegacat',
  templateUrl: "./navegacat.component.html",
  styles: []
})
export class NavegacatComponent implements OnInit {

  @Input('categoria') categoria:any;

  @Output() public asignada = new EventEmitter<any>();

  nombrecompleto: string = "";

  constructor( private _catserv:CategoriasService ) {

  }

  ngOnInit(){
      //La categoria raiz se invoca con su nombre (string) las demás por el objeto que se obtiene por la consulta a la base de datos
    if(this.categoria=="Raíz"){
        this._catserv.creArbol().subscribe(res=>{
          this.categoria = res.categoria;
          this.nombrecompleto = "/Raíz";

          //se cargan las hijas de la categoria
          this._catserv.cargaCategoriaHijas(this.categoria._id).subscribe(
            (res) => {
              this.categoria.hijas = res.hijas;
              //console.log(this.categoria);
            });
        });
    }// else{
    //   this.patharray = this.categoria.path.split("#");
    //   this.nombrecompleto += this.categoria.nombre;
    //   // en el caso de que se trate de una categoria distinta a la raíz bastará con cargar sus hijas
    //   //se cargan las hijas de la categoria
    //   this._catserv.cargaCategoriaHijas(this.categoria._id).subscribe(
    //     (res) => {
    //       this.categoria.hijas = res.hijas;
    //       //console.log(this.cat)
    //     });
    // }
    //console.log(this.categoria)
  }

  cambioCategoria(subcat: string){
      if(!subcat){return;}
      this._catserv.cargaCategoria(subcat).subscribe(
        (res) => {
          this.categoria = res.categoria;
          this.nombrecompleto +="/"+this.categoria.nombre;
        });

        //se cargan las hijas de la categoria
        this._catserv.cargaCategoriaHijas(subcat).subscribe(
          (res) => {
            this.categoria.hijas = res.hijas;
            //console.log(this.cat)
          });
  }

  subirCategoria(){
    let nombrecompletoarray: string[] = this.nombrecompleto.split("/");
    console.log(nombrecompletoarray);
    nombrecompletoarray = nombrecompletoarray.slice(0,-2);
    console.log(nombrecompletoarray);
    this.nombrecompleto =nombrecompletoarray.join("/");
    console.log(this.nombrecompleto);
    this.cambioCategoria(this.categoria.parent);
  }

  asignaCategoria(cat){
    //console.log(catid);
    this.asignada.emit(cat);
  }


}
