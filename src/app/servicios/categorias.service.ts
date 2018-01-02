import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Categoria } from '../modelos/categoria';

@Injectable()

export class CategoriasService {

  private url='http://localhost:3800/proapi';

  constructor( private _http: Http) {

  }

  cargaCategoria(id): Observable<any>{

    return this._http.get(this.url+'/devcategoria/'+id).map(res=> {
      let respuesta = res.json();
      console.log(respuesta);
      return respuesta;

    });

  }
  //
  // devNombre(id): Observable<string>{
  //
  // alert(id);
  //   return this._http.get(this.url+'/devcategoria/'+id).map(res=> {
  //     let respuesta = res.json();
  //     alert(respuesta);
  //     return respuesta.categoria.nombre;
  //   });
  //   // if(id == "56cb91bdc3464f14678934ca"){
  //   //      return "/";
  //   // }else{
  //   //   let nombre = "";
  //   //   this.cargaCategoria(id).subscribe(res=>{
  //   //       nombre = res.categoria.nombre;
  //   //   });
  //   //   return nombre;
  //   // }
  //
  // }

  // devNombreCompletoCategoria(id):string{
  //   if(!id) {return}
  //   console.log(id);
  //   let nombrecompleto:string="";
  //   let path: string[];
  //   if(id=="56cb91bdc3464f14678934ca"){
  //      return "/";
  //   }
  //   this.cargaCategoria(id).subscribe(res=>{
  //     path = res.categoria.path.split("#");
  //   });
  //
  //   return nombrecompleto;
  // }


  cargaCategoriaHijas(id){

    return this._http.get(this.url+'/devcategoriahijas/'+id).map(res=> {
      let respuesta = res.json();
      console.log(respuesta);
      return respuesta;
    });

  }

  guardaCategoria( cat ): Observable<Response> {

    let body = JSON.stringify( cat );
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    if(cat._id){
      //actualiza categoria existente
      return this._http.put( this.url+'/actcategoria/'+cat._id, body, options ).map(res=> {return res.json()});

    }else{
      //crea una nueva categoría
      return this._http.post( this.url+'/grdcategoria', body, options ).map(res=> {return res.json()});
    }

  }

  eliminaCategoria(id){
    return this._http.delete(this.url+'/elmcategoria/'+id);
  }

  creArbol(){
      return this._http.get(this.url+'/devarbol').map(res=> {return res.json()});
  }
}
