import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExposicaoRoutingModule } from './exposicao-routing.module';
import { ExposicaoComponent } from './exposicao.component';
import { ExposicoesComponent } from './exposicoes/exposicoes.component';
import { ExposicaoDetalheComponent } from './exposicao-detalhe/exposicao-detalhe.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [
    ExposicaoComponent,
    ExposicoesComponent,
    ExposicaoDetalheComponent,
    RegistrarComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    ExposicaoRoutingModule
  ]
})
export class ExposicaoModule { }
