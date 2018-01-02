import { Component, OnInit, Input } from '@angular/core';
import { MenuProblemaService } from '../../../servicios/menuproblemas';

@Component({
  selector: 'listaproblemas',
  templateUrl: './listaproblemas.component.html',
  styleUrls: ['./listaproblemas.component.css']
})
export class ListaproblemasComponent implements OnInit {

  @Input('problemas') problemas: any[];

  probselecto: string = "";

  constructor(private _menuser: MenuProblemaService) { }

  ngOnInit() {
  }

  selecProblema(id){

    this.probselecto = id;
    this._menuser.problemActivo =id;

  }
}
