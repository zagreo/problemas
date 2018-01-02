import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  formulas:string[]=["$$a^2+b^2=c^2$$",
                      "$$E=mc^2$$",
                      "$$y=ax^2+bx+c$$",
    "$$\\int_{a}^{b}f(x)dx = F(b)-F(a)$$"];

  constructor() { }

  ngOnInit() {

  }

}
