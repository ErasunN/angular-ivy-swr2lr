import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Avocados } from '../Avocado';
import { AvocadoCartService } from '../avocado-cart.service';

@Component({
  selector: 'app-avocado-cart',
  templateUrl: './avocado-cart.component.html',
  styleUrls: ['./avocado-cart.component.css']
})
export class AvocadoCartComponent implements OnInit {

  cartList: Avocados[];
  total$: number;

  constructor(private cart: AvocadoCartService, private total: AvocadoCartService) {
  }

  ngOnInit(): void {
    this.cart.cartList.subscribe(avos => {
      this.cartList = avos;
    });
    this.total.total.subscribe(t => {
      this.total$ = t;
    });
  }

}
