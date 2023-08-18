import { Component, OnInit } from '@angular/core';
import { ILista } from 'src/app/model/ILista';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IItens } from '../model/IItens';

@Component({
  selector: 'app-transporte-detalhe',
  templateUrl: './transporte-detalhe.page.html',
  styleUrls: ['./transporte-detalhe.page.scss'],
})
export class TransporteDetalhePage implements OnInit {
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
      nome: '99',
      lancamento: '26/06/2012',
      cartaz: 'data:image/png;base64,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',
      descricao1: 'A 99 é um aplicativo de transporte que conecta passageiros a motoristas em diversas cidades, oferecendo uma opção prática e segura para se locomover. Com interface intuitiva e opções de pagamento variadas, a 99 proporciona uma alternativa eficiente ao transporte tradicional.',
      criador: ['Didi Chuxing'],
      pagina: '/99',
      favorito: false
    },
    {
      nome: 'Uber',
      lancamento: '13/10/2010',
      cartaz: 'https://logodownload.org/wp-content/uploads/2015/05/uber-logo-11.png',
      descricao1: 'Uber Technologies Inc. é uma empresa multinacional americana, prestadora de serviços eletrônicos na área do transporte privado urbano, através de um aplicativo de transporte que permite a busca por motoristas baseada na localização, em inglês e-hailing, oferecendo um serviço semelhante ao tradicional táxi.',
      criador: ['Uber Technologies Inc.'],
      pagina: '/uber',
      favorito: false
    },
    {
      nome: 'Cabify',
      lancamento: '09/07/2011',
      cartaz: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQUAAADBCAMAAADxRlW1AAAAsVBMVEVvNv/+/v7///9tMv9lIP9rLv9oJ/9jHP////1pKv/r5/dpKf9rLf9nJf+8q/f///umjfjCsvfc0/iMZ/jt6va6p/lhFf93R/j39vj08/ns6PjVzPaCWfaynfbi3PdrMvfw7vbOwvTHufWumPadf/iMaPh8UfOKaPCghvRvOvZ2R/RxP/XLwPDBs++ScvKTdfDh2vhcAP/k3vOBWfK2pe/a0fmpk/SdgfSvnO+YePe9rPRLmH94AAAMwUlEQVR4nO1diXLiuBYlWiwZbMweCKtJWNMhbuhAyP9/2LM2WzZL6Ko3DRE6UzVJY5tYR1d3k3RVKFhYWFhYWFhYWFhYWFhYWFhYWFhYWBgHXPIRQr7P/+/ia7/OFQAdAlf9MCq2GYrRuD/DpASv/Vr/EtAlvfI6ABw0Bv8lWDenxL0XIqA/7Bfjhj/kEH9Ei9uhfxc8OItqcEhBwgT9GjrXfsX/HLj0JwBU7342JoD+UfDpGK4pyWykGsya3l53q1/lr2p33U6ZoGA0Q9d+0f8QkLyppgLQDudLRJDvOI4f/3ych201UAB9I8ZqB7woqmYG3ZXve3pLoef7q26gbiguvKu9538Kt9cGkoNwiY4NfYyWY8kDaNeNVJKliWggBbUpOiXvEC1rYtCA4N1AGty6IAEE89a5MQ/JXLIVbIwzFXgaiC4uvpa+ubX0KtQHGJlmKeBQ6ATQPTkYtJvJL3Fz3/0Hr/YPQdaiXW+ti25v/WG3085ld/8UoC9BwvjSZrUi9gDomeQ14LrQCd0DErB7PLmAJ5yFiklOg9/gbSr62Y8xwrP+uNvtjvsTnHMgEOMNlA0ylqVnPsqDx4x8Y8JcRRZOsfRC7EwSnYcWZ+HLHBYgfOBNquhNguS9oUWSLLZqrNLgAS7ZJfpsjpFwmnw8DIj2GR5+HOQYAOgOlR6Iwy72ycwcv8lv836dauPB3bQVBzQeEUokQHvGxSEWFP5IYI7b5FV4t3Y1UXAnKmYCtF1cF9sq/xaH1IvYZiyqnBgw9k9/7Q8DGXAWNFHAPeFNU9DoTx1CiDP9bEgdAYLix1oFEgtj3AW44CREqShA2BbuQ+dd5d5hqbXrJCkWRcjcHN3ocjMJ5qn/Q7oypHB0n8gr/dJMBhOUT3L4bT8VqAaYcKfdilcqpMjKOyTbNC9L4wDcHNUYWwim6EAtbRIqguPedBxSh3KmBgS/vg3AfxLglLc5dX/wTISLx2bjIBru3mqD2ttucUEA/oMg7CTdJI1CPHcAdsc1H/R4dOUZxUHsOFYpUwtpqzxmIGjDIM13AXzW9XSUNBrWuSh8mjTqvwdiPhONEuUoDadR6ZPvQRpsAHQTFvwqY6VtTpR0EdCIGcowCQj8kI8Qk3yBC4BGrNVpWISY40if7ks5ChbuXhbIU14v0HvUCyylDjQbsb1HGyFGQCf1Fzbf+QvQcz1sGElOmfuOw6RZ531H6KDpbluZDY/O7P9YeHPe95OkUdxInIojSotqR8SU0YtJq1ngkje6mYwAGVO2jwVMWoYBgPXSoIkpnoHW0/CoSE/kF0ioZ+dBUDcn4yZGAE0Vg8o15WduIc9K6fMTwdKYQSFN4zbt1yTvmMmkQLxW2XgqE/PAnPgbDvkAKKY9D7Fc0bHWDCJeNET6nYaTxXIu/gHMmaEjtZyVYKt75JKdV/Whu5TMBHWCIXRbocjLGeNp4/f8hES60qs9FZ3tqA868oNCS8zlbIzRDITPt4CV5ge5U9X1MxZn+e9y6VdjoW7CE2rWkBD6kTb0SUf8qtTAHBVIRczXgjVMux6x6X5q0EylI4Thjz7IE5NAP39/yhm5mr41AnUMY8HbiX6v684glAYz9qjkz18ZB0LM5hjEQoFEwmseZnRd6002X/z/T4YEb5V3M3484JJrP7DO7gYi/XT9Bn3OeEiQCD97aoyNiOFshUmIshNvaBeoVQu7jGcgvWlQNMZf4FBe8yCbP/Fn3E+QBjOBUp36fL8R8KVPnHoEHO40VguATjPDX3nTYG3WCmBtOXh7mW3x60hzpDkSl6ptzooeBZxECpPMUk686GZNhzNR7vXSqKybQCLnwXtWE2YNB3pR3vSrgSSwVV1r6TVvT+cNyPaIN20UoF9THtIpGsgfcMSbNgwibcCm7I5mmGF63TTrkEHrXF9rsmI0CYXjUbTARXrDEKD3JN2WdQyZ58BJyNkQM+FslD/Q0/2nNP1k5qbaPLxlJt0mICMK5isZFjucQpp13ykFgHZSXTSGRvpKxwBLIr8EQF8Yg5bMNIDB3dRlKbD8gUq3VRkNrar81yU7b00CUem2XwiKRcFsmbzxFjIP8imbHuGarEhg0oaIS0HmUhcEambiDkmIjeNKtl9wsTIo6f43KPWS/YTgoXdf68M1eI8jqRxG9+IrHQMeiu1DxfvxlY4BOhEAIHLuy004AESVceXOfKVj8Pw7VgkWFhYWFhYWFhYWFhYWFhYWFhYWFhb/b3hOjMuz79B1fMe4RLVXKTeb1ZPlOCDMLAL0yHRbHX9VTJu9Ig1W/PhUrWfe2qTnIXkpUn7yjFEVsmMQNjlJm8dZQAOqlUCGsCarEdCKQRvJGM6yQJ7YnnspKLDwlMztmycL9AwL7KJioSX3WrL64XfLgiu33tFoHA7qhk3p8hEBTrGgqU4iSqt3h8T3jZvXPssC7O1jLNiveC8rxP4cAv5ig89ZFgoQx+C/+eNcrafbBvZRYbHw0OHOD8hOyfD5sl7eOn5DyoJ2OX0kuQ9FvAactgAQe56X8Z7YB7dBkof2YSOgtL2u9rIbgVwyfR5/1MLnJcFwwSSdV91RLGAy7Ye17ni7JKn+h72X/f6F76TkNY1oNV0BiGcvLy8rzVbgffxB/Qa8SkjmHcDL/jM7H/WQdqXyBMSJg2Aw+V1lNbl4WTvJwu/9WhzSCcA6rdRFRuw+fnwGybEAH3ldr9RYeHNe5+v6LMBhTS9sDmiyPc5dFtMiVABUy0BVxxYsfIb65YHaOUOYn0TLJ1h4yNS54WWWb6BMIlyMcodhAFnL0ZkFmSvC8qcsxJ5Q9vJGeMjfs1DXWLiNYpGO2u/BT58V7QmZNOA61a4kbdVYEDLABoxcAryUqpNmWABfrRIDvl1ZIKHc5lOuPy73IU3qBcBCW/R3o7zbP3dVv+dYALS7Xe2+xMGdsgxqhgU2chrPfYa47fCR5lm4BVnAddHs0PUxhBg9rkHcvZ1YfaExJyHYtRwPu+QxAkdYAB8L4mLPJxXOEij76qLGAj9yJf4vflKyUL8xWZBlucbKuYNkAGgfxb32ynv3YSk9I7VpluospM/5PUYD5cpeiyPSkRNf/EDH9AITliuzINqq14qAi+aCvb88VmiVpgRaPETWZUF/zhe1MFkK4cex4FYOinJB4Qfyw/dApO0TFvUMlSzkJDsmiY8DZl6EMtBZoPzg75pigd7YiBB+/rGKcz6zkiCTHeJ1zHR/oaNvjSn12VeNfGkpQWojHug6RvGpWbpRFlAtd0yIgjxRJ1NmCH3QlIVsjeiC0rNBIScLvHzXb8JQKtwoC1zuaXi400cUe6WvOgs+sxraiMg+B3v8iTh8zPsL533HG7CUvOJ1tk8FhCzQZVYW8ixkyrptUln4joUbkwVe8RqMjmx98wP2ujs9U9ga5fRCQ6+xwHNroOMfakegsbCgWW0snrq2jdiCvK4vOJqNyGQG6geWUlcbLZ5/r+VtBM2wUChxDVtODyAIb4AFKaG6QXSrU9ZOp8yv9NL3k7U7dRY+0udcUbvu2T0rC7LofEdlZWLZuAEW1BFzn6o5zEWkVddT/HSgpy5UD2LKuNHqOfeVRR2Al0s+x4I8jkUmIqH889dmQdT5jl+UnScHoVPiEvqwx0JWYxrqLRdjD0FVdSYbR1T9OP7ApdaKx92ivedYgFCUfYteie+3prLY27VZSIrUjbZTCHufsrpE0y3AoWgYqG0n9Zfxw4mYsl3db2bPAyAo4/tKz7FQcPriL9CoOh6o0xyvzgLE4iRBnjhTtax5S72ZDLMFHo6yoF8FVGiRsyzIMSgeVN/Rvnr6FT92kreRP2QhCf89l0yiORZyl4OJ2GKcZ4FmWICwqD/Gv+fqssCqiwwyeUcQqnS802voicXxV+ov8KRas6tfLqpSf/wIlpOyEEtf+hjgJWNvgQV2oOKDEE+Way6uUh8Bo+eOFHnwtP9dZj+VLMTo/543+EHOMRqVJAeNimxo8ZMWUDFJR+t/76Uhv7Sz2t2CpRQooflHJ1YLQWM8y5xJXXBJvRnWom5zQ1i+LIa8wH51Cx6pl7uDKOz3SBp9Qn4Rp/cdtNEjm2Y3qlVXBN1CfiGBh5xh3ELkH7wPLrEzBoVDqa3UUb9ih51AmD2kER65LwfIH8MiwXEzLBT4+/77P8oPTQedu6hydRqtiJ9TcgcFz44AyiHgrOjDgRG5F+DFe4sl/slG1Nq+sxO8BHAcekX7Bay/iQPQo3ss7YNZ7T8xEy5cUnOO4LkccPmQcaHB/B4tBFy2NRYArdypgRh2VRQae971u7QPBRZIbMI20wtBNCe34zb+c2DfX9brU4gMWw3714DYtCMsLSwsLCwsLCwsLCwsLCwsLCwsLEzC/wCBp83fZE3l8QAAAABJRU5ErkJggg==',
      descricao1: 'O Cabify é uma plataforma de transporte privado que conecta passageiros a motoristas profissionais por meio de um aplicativo. Fundada em 2011, a empresa oferece carros com motoristas cadastrados, diversas opções de veículos, acompanhamento da rota em tempo real e pagamentos seguros. Com presença global, busca proporcionar transporte acessível e conveniente, com foco na qualidade do serviço e sustentabilidade.',
      criador: ['Maxi Mobility'],
      pagina: '/cabify',
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
