import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IaDetalhesPage } from './ia-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: IaDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IaDetalhesPageRoutingModule {}
