import { Component, OnInit } from '@angular/core';
import { ILista } from 'src/app/model/ILista';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IItens } from '../model/IItens';

@Component({
  selector: 'app-ia-detalhes',
  templateUrl: './ia-detalhes.page.html',
  styleUrls: ['./ia-detalhes.page.scss'],
})
export class IaDetalhesPage implements OnInit {
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
      nome: 'ChatGPT',
      lancamento: '30/11/2022',
      cartaz: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
      descricao1: 'ChatGPT é um chatbot online de inteligência artificial desenvolvido pela OpenAI, lançado em novembro de 2022. O nome "ChatGPT" combina "Chat", referindo-se à sua funcionalidade de chatbot, e "GPT", que significa Generative Pre-trained Transformer, um tipo de modelo de linguagem grande.',
      criador: ['OpenAI'],
      pagina: '/chatgpt',
      favorito: false
    },
    {
      nome: 'Jarbas',
      lancamento: '05/09/2022',
      cartaz: 'https://media.licdn.com/dms/image/C4D0BAQGRB_v4mYQD7g/company-logo_200_200/0/1670243913427?e=2147483647&v=beta&t=TePBpTNRyLqrUPVrf19HSbiiRv5KFgvtkSDyrgo7XcY',
      descricao1: 'Jarbas é uma plataforma de IA para marcas. Ele ajuda os criadores e equipes a usarem IA generativa para superar os bloqueios criativos, criar imagens surpreendentes e otimizar o conteúdo em diferentes formatos, tons e idiomas. Ao contrário da maioria das ferramentas de IA que estão vinculadas a ferramentas individuais e podem produzir resultados bastante genéricos.',
      criador: ['Jarbas, Inc'],
      pagina: '/jarbas',
      favorito: false
    },
    {
      nome: 'Bard',
      lancamento: '21/03/2023',
      cartaz: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqsCR0GJ5L-uzTrmAtwowt2gRCZfqrqATsuzafehlc0g&s',
      descricao1: 'Bard é um chatbot desenvolvido pelo Google, baseado na família de modelos de linguagem LaMDA. A Bard procura combinar a amplitude do conhecimento mundial com o poder, a inteligência e a criatividade de nossos grandes modelos de linguagem. Baseia-se em informações da web para fornecer respostas novas e de alta qualidade',
      criador: ['Google'],
      pagina: '/bard',
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
