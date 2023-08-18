import { Component } from '@angular/core';
import { ILista } from '../model/ILista';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public router: Router,
    public AlertController: AlertController,
    public ToastController: ToastController
  ) {}

  listaLista: ILista[] = [
    {
      nome: 'Inteligência Artificial',
      icon:
        'https://cdn-icons-png.flaticon.com/512/4529/4529980.png',
      pagina: '/ia',
    },
  ];
  exibirLista(lista: ILista) {
    const navigationExtras: NavigationExtras = { state: { paramLista: lista } };
    this.router.navigate(['ia-detalhes'], navigationExtras);
  }

  listaTransporte: ILista[] = [
    {
      nome: 'Transporte',
      icon:
        'data:image/png;base64,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',
      pagina: '/transporte',
    },
  ];

  exibirTransporte(transporte: ILista) {
    const navigationExtras: NavigationExtras = { state: { paramLista: transporte } };
    this.router.navigate(['transporte-detalhe'], navigationExtras);
  }

  listaSaude: ILista[] = [
    {
      nome: 'Saúde',
      icon:
        'https://cdn-icons-png.flaticon.com/512/2024/2024230.png',
      pagina: '/saude',
    },
  ];

  exibirSaude(saude: ILista) {
    const navigationExtras: NavigationExtras = { state: { paramLista: saude } };
    this.router.navigate(['saude-detalhes'], navigationExtras);
  }

  listaAprendizado: ILista[] = [
    {
      nome: 'Aprendizado Online',
      icon:
        'https://cdn-icons-png.flaticon.com/512/2103/2103626.png',
      pagina: '/aprendizado',
    },
  ];

  exibirAprendizado(aprendizado: ILista) {
    const navigationExtras: NavigationExtras = { state: { paramLista: aprendizado } };
    this.router.navigate(['aprendizado-detalhes'], navigationExtras);
  }


}
