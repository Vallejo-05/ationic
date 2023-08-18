import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransporteDetalhePageRoutingModule } from './transporte-detalhe-routing.module';

import { TransporteDetalhePage } from './transporte-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransporteDetalhePageRoutingModule
  ],
  declarations: [TransporteDetalhePage]
})
export class TransporteDetalhePageModule {}
