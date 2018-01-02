import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../servicios/categorias.service';

@Component({
  selector: 'app-taxono',
  templateUrl: './taxono.component.html',
  styleUrls: ['./taxono.component.css']
})
export class TaxonoComponent implements OnInit {

  public raiz: any;

  constructor( private _catser: CategoriasService ) {

  }

  ngOnInit() {
    //comprobar si existe la categoria raíz y en caso contrario crearla

    this._catser.creArbol().subscribe(
      (res) => {
        this.raiz = res.categoria;

      });

  }

}
