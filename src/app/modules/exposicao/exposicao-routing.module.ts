import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExposicoesComponent } from './exposicoes/exposicoes.component';
import { ExposicaoDetalheComponent } from './exposicao-detalhe/exposicao-detalhe.component';
import { EditarComponent } from './editar/editar.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [{
  path: '', children:[
    { path: '', component: ExposicoesComponent },
    { path: 'registrar', component: RegistrarComponent},
    { path: ':id:/editar', component: EditarComponent },
    { path: ':id', component: ExposicaoDetalheComponent },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExposicaoRoutingModule { }
