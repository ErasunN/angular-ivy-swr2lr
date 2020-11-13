import { Injectable } from '@angular/core';
import { Avocados } from './Avocado';

@Injectable({
  providedIn: 'root'
})
export class AvocadoCartService {

  cartList: Avocados[] = [];

  constructor() { }

  addToCart(avocado: any) {
    this.cartList.push(avocado);
  }

}
