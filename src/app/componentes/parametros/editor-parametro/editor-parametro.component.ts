import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Parametro, TipoParametro } from '../../../modelos/parametro';

@Component({
  selector: 'editor-parametro',
  templateUrl: './editor-parametro.component.html',
  styleUrls: ['./editor-parametro.component.css']
})
export class EditorParametroComponent implements OnInit {

  @Input('parametro') parametro: Parametro;
  @Output() public guardar = new EventEmitter<Parametro>();

  tipos: string[] = TipoParametro;
  rango: boolean = true;

  modo:number = 0;

  constructor() { }

  ngOnInit() {

  }

  guardaParametro(){
    this.guardar.emit( this.parametro );
  }

  agregaValor(val){
    this.parametro.generador.dominio.push(val);
  }


  cambiaTipo(){
    if (this.parametro.tipo==0){
      this.parametro.generador = "0";
    }else if(this.parametro.tipo==1){
      this.parametro.generador = {modo: this.modo, min: 0, max: 0, in: 1};
    }else if(this.parametro.tipo==2){
      this.parametro.generador = {func: ""};
    }else{
      this.parametro.generador = null;
    }
  }


  cambiaRango(){
    if(!this.rango){
      this.rango = true;
      this.parametro.generador = {modo: this.modo, min: 0, max: 0, in: 1};
    }
  }

  cambiaDominio(){
    if(this.rango){
      this.rango = false;
      this.parametro.generador = {modo: this.modo, dominio: []};
    }
  }
}
