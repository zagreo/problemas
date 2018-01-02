import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TaxonoComponent } from './componentes/taxono/taxono.component';
import { ProblemasComponent } from './componentes/problemas/problemas.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { ProblemanuevoComponent} from './componentes/problemas/problemanuevo.component';
import { ProblemactualComponent } from './componentes/problemas/problemactual.component';
import { PruebasComponent } from './componentes/pruebas/pruebas/pruebas.component';
import { EditorPruebaComponent } from './componentes/pruebas/editor-prueba/editor-prueba.component';
import { GeneraPruebaComponent } from './componentes/pruebas/genera-prueba/genera-prueba.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'taxono', component: TaxonoComponent },
  {
    path: 'problemas',
    component: ProblemasComponent,
    children:[
      { path: 'consulta', component: ConsultaComponent },
      { path: 'problemanuevo', component: ProblemanuevoComponent },
      { path: 'problemactual/:id', component: ProblemactualComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'consulta' }
    ]
    },
    {
      path: 'pruebas',
      component: PruebasComponent,
      children:[
        { path: 'editorprueba/:id', component: EditorPruebaComponent },
        { path: 'generaprueba', component: GeneraPruebaComponent },
        { path: 'selectorproblemas', component: ConsultaComponent },
        { path: '**', pathMatch: 'full', redirectTo: 'editorprueba' }
      ]
      },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
