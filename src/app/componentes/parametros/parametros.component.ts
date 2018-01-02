import { Component, OnInit, Input } from '@angular/core';
import { Parametro, TipoParametro } from '../../modelos/parametro';

@Component({
  selector: 'parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {

  @Input('parametros') parametros: Parametro[];

  tipoparam: string[] = TipoParametro;

  editando: number = -1;

  constructor() { }

  ngOnInit() {

  }

  parametroNuevo(){

    this.editando = this.parametros.length;
    this.parametros.push( new Parametro("p"+this.parametros.length,null));

  }

  guardaParametro(param){

    this.parametros[this.editando] = param;
    this.editando = -1;
    //console.log(this.parametros);

  }

  borraParametro(i){
    //console.log(i);
    this.parametros.splice(i,1);



  }

}
