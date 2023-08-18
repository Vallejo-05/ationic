import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprendizadoDetalhesPageRoutingModule } from './aprendizado-detalhes-routing.module';

import { AprendizadoDetalhesPage } from './aprendizado-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprendizadoDetalhesPageRoutingModule
  ],
  declarations: [AprendizadoDetalhesPage]
})
export class AprendizadoDetalhesPageModule {}
