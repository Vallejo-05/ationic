import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemTotalPageRoutingModule } from './item-total-routing.module';

import { ItemTotalPage } from './item-total.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemTotalPageRoutingModule
  ],
  declarations: [ItemTotalPage]
})
export class ItemTotalPageModule {}
