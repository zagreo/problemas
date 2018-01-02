import {Directive, ElementRef, OnInit, Input} from '@angular/core';

declare var MathJax: {
  Hub: {
    Queue: (param: Object[]) => void;
  }
}

@Directive({selector: '[mathjax]'})

export class MathJaxDirective implements OnInit {

  @Input("mathjax") private value: string = "";

  constructor(private elemento: ElementRef) {}

  ngOnInit() {
    this.elemento.nativeElement.innerHTML = this.value;
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.elemento.nativeElement]);
  }

  ngOnChanges() {
      this.elemento.nativeElement.innerHTML = this.value;
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.elemento.nativeElement]);
  }
}
