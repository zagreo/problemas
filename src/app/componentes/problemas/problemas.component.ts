import { Component, OnInit, DoCheck } from '@angular/core';
import { MenuProblemaService } from '../../servicios/menuproblemas';
@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.component.html',
  styleUrls: ['./problemas.component.css'],
  providers: [ MenuProblemaService ]
})
export class ProblemasComponent implements OnInit, DoCheck {

  menu:any[]=[
    { titulo:"Consulta",url:'consulta'},
    {titulo:"Problema Nuevo",url:'problemanuevo'}
  ]

  constructor(private _menuser: MenuProblemaService) { }

  ngOnInit() {

  }

  ngDoCheck(){
    if(this._menuser.problemActivo!=""){
      if(this.menu.length==2){
        this.menu.push({titulo:"Problema Activo",url:'problemactual/'+this._menuser.problemActivo});
      }else{
        let nuevourl: string = 'problemactual/'+this._menuser.problemActivo;
        if( this.menu[2].url != nuevourl ){ this.menu[2].url = nuevourl };
      }
      //console.log(this.menu);
    }
  }



}
