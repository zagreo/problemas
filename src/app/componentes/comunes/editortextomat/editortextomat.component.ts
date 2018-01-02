import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'editortextomat',
  templateUrl: './editortextomat.component.html',
  styleUrls: ['./editortextomat.component.css']
})
export class EditortextomatComponent implements OnInit {

  @Input('texto') texto: string;
  @Output() public guardar = new EventEmitter<string>();
  letrasgriegas: string[] = ["\\alpha", "\\beta",  "\\gamma", "\\delta", "\\epsilon",
  "\\zeta", "\\eta", "\\theta", "\\iota", "\\kappa", "\\lambda", "\\mu", "\\nu", "\\xi",
  "\\omicron", "\\pi", "\\rho", "\\sigma", "\\tau", "\\upsilon", "\\phi", "\\chi", "\\psi", "\\omega" ];

  operadores: string[]=["\\pm","\\times","\\cdot","\\cap","\\cup"]





  constructor() { }

  ngOnInit() {
  }

  insertar(areatexto,token){
    let cursor=areatexto.selectionStart;
    areatexto.value=areatexto.value.slice(0,cursor)+token+areatexto.value.slice(areatexto.selectionEnd);
    areatexto.selectionStart=cursor+2;
    areatexto.selectionEnd=cursor+2;
    this.texto = areatexto.value;
  }

  cerrar(){
    this.guardar.emit( this.texto );
  }

}
