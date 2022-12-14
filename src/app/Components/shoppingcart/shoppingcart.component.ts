import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
})
export class ShoppingcartComponent implements OnInit {
  paymentHandler: any = null;
  myname: any;
  favoriteProducts: any[] = [];
  total: number = 0 || 1;
  quantity: number = 1;
  favorite: number = 0;
  imagepath: any = 'http://localhost:8000/assets/';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getFavoriteProducts();
  }
  getFavoriteProducts() {
    if ('shoppingcart' in localStorage) {
      this.favoriteProducts = JSON.parse(localStorage.getItem('shoppingcart')!);
    }
    console.log(this.favoriteProducts);
    this.getTotal();
  }

  getTotal() {
    this.total = 0;

    for (let i in this.favoriteProducts) {
      this.total +=
        this.favoriteProducts[i].price * this.favoriteProducts[i].quantity || 0;
    }
    let x = this.total > 0 ? this.total : 1;
    // return x;
    console.log(x);
    console.log();

    localStorage.setItem('x', JSON.stringify(this.total));
  }

  getmax(index: number) {
    this.favoriteProducts[index].quantity++;
    this.getTotal();
    localStorage.setItem('shoppingcart', JSON.stringify(this.favoriteProducts));
  }
  getmin(index: number) {
    if (this.quantity > 0) {
      Math.abs(this.favoriteProducts[index].quantity--);
      this.getTotal();
      localStorage.setItem(
        'shoppingcart',
        JSON.stringify(this.favoriteProducts)
      );
    }
  }

  deleteItem(index: number) {
    this.favoriteProducts.splice(index, 1);
    this.getTotal();
    localStorage.setItem('shoppingcart', JSON.stringify(this.favoriteProducts));
  }

  clearProducts() {
    this.favoriteProducts = [];
    this.getTotal();
    localStorage.setItem('shoppingcart', JSON.stringify(this.favoriteProducts));
  }
}
