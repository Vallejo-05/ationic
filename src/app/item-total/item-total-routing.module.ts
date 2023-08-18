import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemTotalPage } from './item-total.page';

const routes: Routes = [
  {
    path: '',
    component: ItemTotalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemTotalPageRoutingModule {}
