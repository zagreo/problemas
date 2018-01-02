import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'soluciones',
  templateUrl: './soluciones.component.html',
  styleUrls: ['./soluciones.component.css']
})
export class SolucionesComponent implements OnInit {

  @Input('soluciones') soluciones: any[];
  @Input('instancia') instancia: any;
  
  agregasol: boolean = false;
  nuevasol: any = {texto: "", alta: new Date(), fuente:"Zagreus"};
  editando: number = -1;
  constructor() { }

  ngOnInit() {
  }

  guardasol(nvsl){

    this.nuevasol.texto = nvsl;
    if(this.editando==-1){
      this.soluciones.push(this.nuevasol);
    }else{
      this.soluciones[this.editando] = this.nuevasol;
    }
    this.editando = -1;
    this.agregasol = false;
    this.nuevasol = {texto: "", alta: new Date(), fuente:"Zagreus"};
  }

  borraSol(i){
    this.soluciones.splice(i,1);
  }
}
