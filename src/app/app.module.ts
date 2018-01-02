import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// nuevo módulo para consulta de APIs el anterior va a deprecar
import { HttpClientModule } from '@angular/common/http'

//Servicios
import { CategoriasService } from './servicios/categorias.service';
import { ProblemasService } from './servicios/problemas.service';

//Rutas

import { APP_ROUTING } from './genprob.routes';

//Directivas
import { MathJaxDirective } from './directivas/mathjax.directiva';

//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TaxonoComponent } from './componentes/taxono/taxono.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CategoriaComponent } from './componentes/taxono/categoria.component';
import { ProblemasComponent } from './componentes/problemas/problemas.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { EditorProblemaComponent } from './componentes/problemas/editor-problema/editor-problema.component';
import { ProblemanuevoComponent } from './componentes/problemas/problemanuevo.component';
import { ProblemactualComponent } from './componentes/problemas/problemactual.component';
import { NavegacatComponent } from './componentes/taxono/navegacat.component';
import { EditorcatComponent } from './componentes/taxono/editorcat.component';
import { EditorParametroComponent } from './componentes/parametros/editor-parametro/editor-parametro.component';
import { ParametrosComponent } from './componentes/parametros/parametros.component';
import { EditortextomatComponent } from './componentes/comunes/editortextomat/editortextomat.component';
import { CategoriasComponent } from './componentes/taxono/categorias.component';
import { SolucionesComponent } from './componentes/soluciones/soluciones.component';
import { ListaproblemasComponent } from './componentes/consulta/listaproblemas/listaproblemas.component';
import { PruebasComponent } from './componentes/pruebas/pruebas/pruebas.component';
import { EditorPruebaComponent } from './componentes/pruebas/editor-prueba/editor-prueba.component';
import { GeneraPruebaComponent } from './componentes/pruebas/genera-prueba/genera-prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TaxonoComponent,
    NavbarComponent,
    CategoriaComponent,
    MathJaxDirective,
    ProblemasComponent,
    ConsultaComponent,
    EditorProblemaComponent,
    ProblemanuevoComponent,
    ProblemactualComponent,
    NavegacatComponent,
    EditorcatComponent,
    EditorParametroComponent,
    ParametrosComponent,
    EditortextomatComponent,
    CategoriasComponent,
    SolucionesComponent,
    ListaproblemasComponent,
    PruebasComponent,
    EditorPruebaComponent,
    GeneraPruebaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    CategoriasService,
    ProblemasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
