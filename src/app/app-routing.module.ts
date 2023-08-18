import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ia-detalhes',
    loadChildren: () => import('./ia-detalhes/ia-detalhes.module').then( m => m.IaDetalhesPageModule)
  },
  {
    path: 'item-total',
    loadChildren: () => import('./item-total/item-total.module').then( m => m.ItemTotalPageModule)
  },
  {
    path: 'transporte-detalhe',
    loadChildren: () => import('./transporte-detalhe/transporte-detalhe.module').then( m => m.TransporteDetalhePageModule)
  },
  {
    path: 'saude-detalhes',
    loadChildren: () => import('./saude-detalhes/saude-detalhes.module').then( m => m.SaudeDetalhesPageModule)
  },
  {
    path: 'aprendizado-detalhes',
    loadChildren: () => import('./aprendizado-detalhes/aprendizado-detalhes.module').then( m => m.AprendizadoDetalhesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
