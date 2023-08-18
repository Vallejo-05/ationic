import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IaDetalhesPageRoutingModule } from './ia-detalhes-routing.module';

import { IaDetalhesPage } from './ia-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IaDetalhesPageRoutingModule
  ],
  declarations: [IaDetalhesPage]
})
export class IaDetalhesPageModule {}
