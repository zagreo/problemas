import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ProblemasService } from '../../../servicios/problemas.service';

import { Problema } from '../../../modelos/problema';
import { Parametro, TipoParametro } from '../../../modelos/parametro';
import { Instancia } from '../../../lib/generainstancia';


@Component({
  selector: 'editor-problema',
  templateUrl: './editor-problema.component.html',
  styleUrls: ['./editor-problema.component.css']
})
export class EditorProblemaComponent {

  @Input('problema') problema: Problema;
  editarenunciado: boolean = false;

  instancia: Instancia;

  constructor( private _probserv: ProblemasService,
                private ruter: Router) {

  }

  actuaenunciado(event){
    //console.log(event);
    this.problema.enunciado.texto = event;
    this.instancia = new Instancia(this.problema);
    this.editarenunciado=false;
  }

  guardaProblema(){

    this._probserv.guardaProblema( this.problema ).subscribe(
      (res)=>{
        console.log(res);
        return res;
      }
    );
    this.ruter.navigate(['problemas/consulta'])
  }

  generaInstanciaEnunciado(){
    this.instancia = this.instancia || new Instancia(this.problema);
    return this.instancia.devInstanciaEnunciado();
  }

}
