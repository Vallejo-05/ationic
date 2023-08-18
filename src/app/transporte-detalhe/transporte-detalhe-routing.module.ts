import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransporteDetalhePage } from './transporte-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: TransporteDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransporteDetalhePageRoutingModule {}
