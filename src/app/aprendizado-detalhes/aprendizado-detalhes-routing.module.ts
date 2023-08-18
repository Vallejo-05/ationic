import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprendizadoDetalhesPage } from './aprendizado-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: AprendizadoDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprendizadoDetalhesPageRoutingModule {}
