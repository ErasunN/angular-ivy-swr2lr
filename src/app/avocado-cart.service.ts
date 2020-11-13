import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Avocados } from './Avocado';

@Injectable({
  providedIn: 'root'
})
export class AvocadoCartService {

  private _cartList: Avocados[] = [];
  cartList: BehaviorSubject<Avocados[]> = new BehaviorSubject(this._cartList);

  private _total = 0;
  total: BehaviorSubject<number> = new BehaviorSubject(this._total);

  constructor() { }

  addToCart(avocado: any): void {
    let item: Avocados = this._cartList.find((v1) => v1.name == avocado.name);
    if (!item){
      this._cartList.push({... avocado});
    }else{
        item.quantity += avocado.quantity;
    }
    this.cartList.next(this._cartList);
    this._total += (avocado.price * avocado.quantity);
    this.total.next(this._total);
  }

}
