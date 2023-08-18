import { IItens } from './../model/IItens';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-total',
  templateUrl: './item-total.page.html',
  styleUrls: ['./item-total.page.scss'],
})
export class ItemTotalPage implements OnInit {
  itens:any;

  constructor(
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      const getNav = this.router.getCurrentNavigation();
      if (getNav?.extras.state) {
        this.itens = getNav.extras.state['paramItens'];
      }
    });
  }
}
