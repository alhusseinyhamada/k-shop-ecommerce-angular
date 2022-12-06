import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { AppServicesService } from 'src/app/Services/app-services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  //to get for allproduct
  productList: Iproduct[] = [];
  //to get last products  from localStorage
  lastProducts: Iproduct[] = [];
  @Input() recievedCatId: number = 0;
  @Output() totalPriceChanged: EventEmitter<number>;

  @Input() searchForProduct: string = '';

  constructor(private appServices: AppServicesService, private router: Router) {
    this.totalPriceChanged = new EventEmitter<number>();
  }

  ngOnInit() {
    this.productList = this.appServices.getAllProducts();
    console.log(this.getFavoriteProducts());
  }

  lastForProducts: any[] = [];
  //add product  to storage
  addLastProduct(prd: any) {
    if ('lastProducts' in localStorage) {
      this.lastForProducts = JSON.parse(localStorage.getItem('lastProducts')!);
      let exist = this.lastForProducts.find((item) => item.id == prd.id);
      if (exist) {
      } else {
        this.lastForProducts.push(prd);
        localStorage.setItem(
          'lastProducts',
          JSON.stringify(this.lastForProducts)
        );
      }
    } else {
      this.cartProducts.push(prd);
      localStorage.setItem(
        'lastProducts',
        JSON.stringify(this.lastForProducts)
      );
    }
  }

  //get product favorite
  getFavoriteProducts() {
    if ('lastProducts' in localStorage) {
      this.lastProducts = JSON.parse(localStorage.getItem('lastProducts')!);
    }
    return this.lastProducts;
  }

  favoriteProducts: any[] = [];
  //add favorite in wishlist
  add(prd: any) {
    if ('favorite' in localStorage) {
      this.favoriteProducts = JSON.parse(localStorage.getItem('favorite')!);
      let exist = this.favoriteProducts.find((item) => item.id == prd.id);
      if (exist) {
        alert('عفوا هذا المنتج موجود فى المفضلة');
      } else {
        this.favoriteProducts.push(prd);
        localStorage.setItem('favorite', JSON.stringify(this.favoriteProducts));
      }
    } else {
      this.favoriteProducts.push(prd);
      localStorage.setItem('favorite', JSON.stringify(this.favoriteProducts));
    }
  }

  cartProducts: any[] = [];
  //add product to cart
  addCart(prd: any) {
    if ('shoppingcart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('shoppingcart')!);
      let exist = this.cartProducts.find((item) => item.id == prd.id);
      if (exist) {
        alert('عفوا هذا المنتج موجود فى السلة');
      } else {
        this.cartProducts.push(prd);
        localStorage.setItem('shoppingcart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(prd);
      localStorage.setItem('shoppingcart', JSON.stringify(this.cartProducts));
    }
  }

  getDetails(id: number) {
    this.router.navigate(['product', id]);
  }

  //star rating
  rating = 2;
  number = 0;
  stars = [1, 2, 3, 4, 5];
  classVal: string = 'star';
  //get starRate for products
  starRating(num: any, counter: any) {
    this.rating = num;
    this.number = counter;
    console.log(num);
  }

  counter: number = 4;
  //show all products
  showAllProducts() {
    this.counter = this.productList.length - 4 + this.counter;
  }
}
