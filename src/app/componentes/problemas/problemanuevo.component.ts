import { Component } from '@angular/core';
//modelo
import { Problema } from '../../modelos/problema';


@Component({
  selector: 'app-problemanuevo',
  template: `
    <editor-problema [problema]="problemanuevo"></editor-problema>
  `,
  styles: []
})
export class ProblemanuevoComponent  {

  problemanuevo:Problema = new Problema("");

  constructor() { }



}
