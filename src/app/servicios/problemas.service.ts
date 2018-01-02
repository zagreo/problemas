import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ProblemasService {

  private url='http://localhost:3800/proapi';

  problemas:any[]=[];

  constructor( private _http: HttpClient ) {

  }

  devProblema(id){

    return this._http.get(this.url+'/devproblema/'+id);

  }

  cuentaProblemas(consulta: any): Observable<any>{

    consulta = consulta.map((cat)=>{return cat.path});
    let body = JSON.stringify( consulta );
    console.log(body);
    let headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
    return this._http.post(this.url+'/cuentaproblemas', body, { headers: headers });

  }

  consultaProblemas(consulta: any): Observable<any>{
    let taxones = consulta.categorias
    consulta.categorias = taxones.map((cat)=>{return cat.path});
    let body = JSON.stringify( consulta );
    console.log(body);
    let headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
    return this._http.post(this.url+'/consultaproblemas', body, { headers: headers });

  }

  guardaProblema( prob ): Observable<any> {

    let body = JSON.stringify( prob );
    let headers = new HttpHeaders().set( 'Content-Type', 'application/json' );

    if(prob._id){
      //actualiza categoria existente
      return this._http.put( this.url+'/cmbproblema/'+prob._id, body, { headers: headers } );

    }else{
      //crea una nueva categoría
      console.log(body);
      return this._http.post( this.url+'/creaproblema', body, { headers: headers } );
    }
  }

}
