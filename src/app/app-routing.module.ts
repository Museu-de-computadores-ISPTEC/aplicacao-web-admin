import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren:()=> import('./modules/home/home.module').then(m=>m.HomeModule) },
  { path: 'exposicao', loadChildren: ()=> import('./modules/exposicao/exposicao.module').then(m=>m.ExposicaoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
