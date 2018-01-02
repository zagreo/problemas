import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ProblemasService } from '../../servicios/problemas.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent  {

  problemas:any[]=[];
  taxones:any[]=[];
  numprob: number = 0;
  paginas: number[] = null;
  probpag: number = 5;
  pagactual: number = 1;


  constructor( private _probserv: ProblemasService,
                private ruter: Router) {
      // this._probserv.consultaProblemas({}).subscribe(
      //   (res)=>{
      //     this.problemas = res['problemas'];
      //   }
      // );
   }

   cambioConsulta(){
     this.numeroProblemas();
     this.devConsulta();
   }



   cambioPagina(nueva){
     if(this.pagactual == nueva)return;
     this.pagactual = nueva;
     this.devConsulta();
   }

   numeroProblemas(){

     this._probserv.cuentaProblemas(this.taxones).subscribe(
       (res)=>{
         this.numprob = res['numprob'];
         this.paginas = new Array(Math.ceil(this.numprob/this.probpag));
       }
     );
     ;
   }

   devConsulta(){

     let consulta = {categorias: this.taxones, inicio: (this.pagactual-1)*this.probpag, numprob: this.probpag}
     //console.log(consulta);
     this._probserv.consultaProblemas(consulta).subscribe(
       (res)=>{
         this.problemas = res['problemas'];
       }
     );

   }



  editarProblema(id){

    this.ruter.navigate(['problemas/problemactual',id]);

  }
}
