import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  menu:any[]=[
    { titulo:"Editor Prueba", url:'editorprueba'},
    {titulo:"Selector de Problemas", url:'selectorproblemas'},
    {titulo:"Generador de Pruebas", url:'selectorproblemas'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
