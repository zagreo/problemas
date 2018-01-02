import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProblemasService } from '../../servicios/problemas.service';

@Component({
  selector: 'app-problemactual',
  template: `
      <editor-problema [problema]="problema"></editor-problema>
  `,
  styles: []
})
export class ProblemactualComponent  {

  problema:any;

  constructor( private _probser: ProblemasService,
                private activatedroute: ActivatedRoute ) {

      this.activatedroute.params.subscribe(params=>{
                  this._probser.devProblema(params['id']).subscribe(
                    res=>{
                      this.problema = res['problema'];
                      //console.log(this.problema)
                    }
                  );

                });
  }
}
