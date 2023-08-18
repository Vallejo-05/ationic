import { Component, OnInit } from '@angular/core';
import { ILista } from 'src/app/model/ILista';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IItens } from '../model/IItens';


@Component({
  selector: 'app-saude-detalhes',
  templateUrl: './saude-detalhes.page.html',
  styleUrls: ['./saude-detalhes.page.scss'],
})
export class SaudeDetalhesPage implements OnInit {
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
      nome: 'Fitness',
      lancamento: '12/09/2014',
      cartaz: 'https://www.apple.com/v/watch/close-your-rings/d/images/meta/og__bb3dc50gux7m.png?202103121344',
      descricao1: 'Fitness é um aplicativo de acompanhamento de exercícios anunciado pela Apple, baixando você pode elevar os seus exercícios ao próximo nível, sempre e onde quiser. Visualize suas calorias ativas e passos, defina uma meta de movimento, acompanhe seu progresso e veja suas tendências de movimento ao longo do tempo.',
      criador: ['Apple'],
      pagina: '/',
      favorito: false
    },
    {
      nome: 'TecnoNutri',
      lancamento: '18/02/2017',
      cartaz: 'data:image/jpeg;base64,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',
      descricao1: 'O TecnoNutri é um aplicativo, para Android e iOS, que pode se tornar o melhor amigo de quem deseja emagrecer de uma vez por todas. Com um sistema prático, ele ajuda a definir uma dieta, levando em consideração o peso, sexo e a altura do usuário. O software oferece uma lista de dois mil alimentos com os valores nutricionais para o usuário consultar. É possível, também, registrar o seu consumo diário para comparar com os valores calóricos já estipulados pelo app.',
      criador: ['Vitat'],
      pagina: '/tecnonutri',
      favorito: false
    },
    {
      nome: 'Google Fit',
      lancamento: '21/03/2023',
      cartaz: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAABBVBMVEX///9DhvTqRDc2qVT7vQf7uwA9g/T/vgDqQjXqPjAlpUk4gfTqQDLpOTkxqVXpOCnpLx0ZokLy9v7t8v7Y5PwvffNEhPstp0797u35+//+9fWaufjR3/yhvvnpNCP7twD/+/Oy2ruaz6dTsmr5z83rTD/venN5pPZPjfX2ubW/0/twn/Zbk/Xzn5r62tjoKBLtZ17+6b3/9uPF48z8xQA3lqrkuhdiuHZwvYKBxJCLyJnyl5HucmrsX1Xh0+P3w8DRSVxVfeTZTVSwyPnsVkvPUWbIUnHwxrPJrHfRrmv+79DXsFz0qqbwhX7bsU/xfCQ4lLv7wC8vqjvziCP0ljzj8uH8xUSDznH/AAAFO0lEQVRoge3XbWPaNhAAYGHA2JjGBuKEGOKkCW/hvem6tA0Z3crWLku6dd32/3/KZOOAJZ1k2cHePvg+lthP73Q6SwjlkUceeeSRx/89nBYOJ+5TJ40mjsZJMrI7fVz0dNPUe4v+bVcWb3Tag8mwYBiF4WRw2olpO6u+Pjf1muZHTTfn5vIqmj4ZjQ3bUNWCH6pq2IXBSJ52pqalawoRmm65ty3hY422bQfkLlRbPZWUp3OTQgPanN8KHmvbBo1uwrBPJdSZ4kLoJkyzy3mso3JUXy4cRiZr1fgsztmCU27bfNWvtjhl59EFSxwKd8n2V2MsZnHYA8EqO0tBjbe1XtDt1RwLaryt9bjBZ81oFsN3JNycSLAezMu4L5GtD69b8VkMD2B2Kskqir7erXFjKMniNQabazaXZTHce4IbBWZUCGBoO9ETSgwrTnwW76fnVDnI2Fvj5jAWC1TasWKxGzgui2F6M02hLVQzLRwmPMH03g8TmMXfIRwG9KPRptLV2NXV3cV01e2upgtXB1zzw48gq9rj9qjTGbUn7NcJB7mJV0yZNfdutm31BTs+MQsma4y3TduZsOPTHhFun85Ic6fh3x/oTyOXJTrnlNnbKjE8Wgqdj/tALsSKhM2fQLVgkOmgj2zG4c5iZobLfO5W4VLzWKqKONp0xsTsoLu5tqafR6hraZFsh3nqhO55Ygs/UstrXbHuDnY/SLMIjahKEwu8JF1NAU9wAez+HIPFk5Ryx7vfnDtyNOhL6A0B7P4Sh0VoTBZanex2cGtNtrPJOzd2XY3HGhyW6azhrqFbPUkXwzCrqjyWdZsJXPQJHI4CVuQ6a2p9+7yX3Fc+A66IRQPqgUlocCxIV1tz7kLXZ+XKr+y5hru2yDsHUf/H8PGOHs8WfC24PyuVSiwsYlFHtH9vqXmlL7gshn8jK2cILyHUNiK/wMxnEBpY9+VyCYDFLD2uyBHeog9Xms5U+tUTi+EvqiTbYbrQboZ/X9Df35oyI98QYv2MNy9UVSF7yBw3w2MSxwNzmqzpBEywHuy/URVfMFm2YH8k/oIptHeoC8EUG8BRLHC0I8vMfgm9Nba28KuzEh2VL8OI6/QhcDlV6TsSdEvZwgDrwxHZsixwUwESxoe7GZctlSv3sVkmXTyjoWuZ5g0uDlu6FrH0mArSBe7eV9BNRTO7yVjwcko1cxDgbf/F75Aaxb7+4whgjTH4x86aXeKE7HEdgMMnHCJmPRrmsV/FbLVYrDKwYLPTcHKWhYUzZqboBPtdErZe9IMsdcRomym1PbHF4p9vjmRZDOu1KPZcjsXwNuOIz5YXreB6/3x2l7FqNEUPBbDurfGLb0nYlwT7BEux3mVYT8pWi1TUMawWpFjvGK9/42ygmCzeTm+OhpIsbq6/QLbyfWzWyziypXZx/bUMscWXIrYOsceXf8uzIIzZgzof3gsLwB6Lq8aD98Qy8Iblwhy2eB6XRei8VGZZDsxj46sevMt4x2L4gvnLi32yITjM4i1JwxfgBjq+TMhi+J/yhj04CL+RgnnseWJ3A5PZMqWGi1x9DuvDLEvAqbAeDLAhmMPePE/14Jtj6M0BzOnk5C0Viks+nCYrgNNlMQzulCrvn/fF8mAw9skidCML76GTk8D7ZhF6KwNX3+6blYLTYCXgdNjINd7/2krB6bHCUqdV5Ag4XZYLp80i9A6Cq+/SZkE4CxaAs2EZOCsWw+HvfT0zloCzZBF6/wTX32fJbuGsWQx7zVXNnPWvRcwNLRsYuJFmEq//GzaPPPLII48U41/w4qEgE2vzggAAAABJRU5ErkJggg==',
      descricao1: 'Google Fit é uma plataforma de acompanhamento de saúde desenvolvida pela Google para o sistema operacional Android e Wear OS. É um conjunto único de APIs que combina dados de vários aplicativos e dispositivos.',
      criador: ['Google'],
      pagina: '/fit',
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
