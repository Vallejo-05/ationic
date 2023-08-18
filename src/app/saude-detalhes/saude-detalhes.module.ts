import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaudeDetalhesPageRoutingModule } from './saude-detalhes-routing.module';

import { SaudeDetalhesPage } from './saude-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaudeDetalhesPageRoutingModule
  ],
  declarations: [SaudeDetalhesPage]
})
export class SaudeDetalhesPageModule {}
