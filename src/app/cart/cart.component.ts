import { Component } from '@angular/core';
import { CartService } from '../cart.service';
export class CartComponent {

  constructor(
    private cartService: CartService
  ) { }
}
export class CartComponent {
  items;

  constructor(
    private cartService: CartService
  ) { }
}
export class CartComponent implements OnInit {
  items;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
}