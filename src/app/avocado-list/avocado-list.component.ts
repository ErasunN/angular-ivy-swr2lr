import { Component, OnInit } from '@angular/core';
import { Avocados } from '../Avocado';
import { AvocadoCartService } from '../avocado-cart.service';

@Component({
  selector: 'app-avocado-list',
  templateUrl: './avocado-list.component.html',
  styleUrls: ['./avocado-list.component.css']
})
export class AvocadoListComponent implements OnInit {

  avocados: Avocados[] = [
    {
      id: 1,
      name: 'Avocado Hass',
      price: 15,
      image: 'https://californiaavocado.com/wp-content/uploads/2020/07/hass-medium.jpg',
      stock: 10,
      quantity: 0,
    },
    {
      id: 2,
      name: 'Avocado Bacon',
      price: 12.5,
      image: 'https://californiaavocado.com/wp-content/uploads/2020/07/bacon-medium.jpg',
      stock: 20,
      quantity: 0,
    },
    {
      id: 3,
      name: 'Avocado Zutano',
      price: 10,
      image: 'https://californiaavocado.com/wp-content/uploads/2020/07/zutano-medium.jpg',
      stock: 33,
      quantity: 0,
    },
    {
      id: 4,
      name: 'Avocado Reed',
      price: 8,
      image: 'https://californiaavocado.com/wp-content/uploads/2020/07/reed-medium.jpg',
      stock: 0,
      quantity: 0,
    },
    {
      id: 5,
      name: 'Avocado Fuerte',
      price: 10,
      image: 'https://californiaavocado.com/wp-content/uploads/2020/07/fuerte-medium.jpg',
      stock: 13,
      quantity: 0,
    },
    {
      id: 6,
      name: 'Avocado Gwen',
      price: 9.50,
      image: 'https://californiaavocado.com/wp-content/uploads/2020/07/gwen-medium.jpg',
      stock: 5,
      quantity: 0,
    },
  ];

  constructor(private cart: AvocadoCartService) {}

  ngOnInit(): void {
  }

  addToCart(avocado): void{
    this.cart.addToCart(avocado);
    avocado.stock -= avocado.quantity;
    avocado.quantity = 0;
  }

}
