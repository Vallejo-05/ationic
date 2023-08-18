import { Component, OnInit } from '@angular/core';
import { ILista } from 'src/app/model/ILista';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IItens } from '../model/IItens';

@Component({
  selector: 'app-aprendizado-detalhes',
  templateUrl: './aprendizado-detalhes.page.html',
  styleUrls: ['./aprendizado-detalhes.page.scss'],
})
export class AprendizadoDetalhesPage implements OnInit {
  itens: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public AlertController: AlertController,
    public ToastController: ToastController) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav?.extras.state) {
        this.itens = getNav.extras.state['paramItens'];
      }
    });
  }

  listaItens: IItens[] = [
    {
      nome: 'Teams',
      lancamento: '02/11/2006',
      cartaz: 'data:image/png;base64,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',
      descricao1: 'Microsoft Teams é uma plataforma unificada de comunicação e colaboração que combina bate-papo, videoconferências, armazenamento de arquivos e integração de aplicativos no local de trabalho.',
      criador: ['Microsft'],
      pagina: '/teams',
      favorito: false
    },
    {
      nome: 'Zoom',
      lancamento: '',
      cartaz: 'data:image/jpeg;base64,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',
      descricao1: 'A Zoom Video Communications é uma empresa americana de serviços de reuniões remotas, tendo sede em San Jose, Califórnia. Ela fornece um serviço de conferência remota "Zoom" que combina videoconferência, reuniões online, bate-papo e colaboração móvel.',
      criador: ['Zoom, Inc'],
      pagina: '/zoom',
      favorito: false
    },
    {
      nome: 'Meet',
      lancamento: '09/03/2017',
      cartaz: 'data:image/jpeg;base64,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',
      descricao1: 'Google Meet é um serviço de comunicação por vídeo desenvolvido pelo Google. É um dos dois serviços que substituem a versão anterior do Google Hangouts, o outro é o Google Chat.',
      criador: ['Google'],
      pagina: '/meet',
      favorito: false
    },
  ];
  exibirItens(itens: IItens) {
    const navigationExtras: NavigationExtras = { state: { paramItens: itens } };
    this.router.navigate(['item-total'], navigationExtras);
  }

  async exibirAlertaFavorito(itens: IItens) {
    const alert = await this.AlertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar esse item?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            itens.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            itens.favorito=true;
            this.apresentarToast(itens);
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast(itens:IItens) {
    const toast = await this.ToastController.create({
      message: 'Item adicionado aos favoritos...',
      duration: 3000,
      color: 'success',
      buttons: [
        {
          text: 'Desfazer',
          handler: () => {
            itens.favorito=false;
          }
        }
      ]
    });
    toast.present();
  }
}
