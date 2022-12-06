import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class AppServicesService {
  products: Iproduct[] = [];
  constructor() {
    /*
    clothes => catId=2
    mobile => catID=1
    */
    this.products = [
      {
        id: 1,
        name: 'تيشيرت-كم طويل-آرت وير-نسائى',
        quantity: 1,
        number: 8,
        price: 4700,
        catID: 1,
        imgURL: 'assets/images/pic-6@2x.jpg',
      },
      {
        id: 2,
        name: 'تيشيرت-كم طويل-آرت وير-نسائى',
        quantity: 1,
        number: 7,
        price: 6700,
        catID: 2,
        imgURL: 'assets/images/pic@2x.jpg',
      },
      {
        id: 3,
        name: 'تيشيرت-كم طويل-آرت وير-نسائى',
        quantity: 1,
        number: 5,
        price: 7600,
        catID: 1,
        imgURL: 'assets/images/picc@2x.jpg',
      },
      {
        id: 4,
        name: 'تيشيرت-كم طويل-آرت وير-نسائى',
        quantity: 1,
        number: 3,
        price: 7700,
        catID: 2,
        imgURL: 'assets/images/piccc@2x.jpg',
      },
      {
        id: 5,
        name: 'تيشيرت-كم طويل-آرت وير-نسائى',
        quantity: 1,
        number: 8,
        price: 7000,
        catID: 1,
        imgURL: 'assets/images/pic-6@2x.jpg',
      },
      {
        id: 6,
        name: 'تيشيرت-كم طويل-آرت وير-نسائى',
        quantity: 1,
        number: 7,
        price: 6000,
        catID: 2,
        imgURL: 'assets/images/pic@2x.jpg',
      },
      {
        id: 7,
        name: 'تيشيرت-كم طويل-آرت وير-نسائى',
        quantity: 1,
        number: 5,
        price: 8800,
        catID: 1,
        imgURL: 'assets/images/picc@2x.jpg',
      },
      {
        id: 8,
        name: 'تيشيرت-كم طويل-آرت وير-نسائى',
        quantity: 1,
        number: 3,
        price: 7700,
        catID: 2,
        imgURL: 'assets/images/piccc@2x.jpg',
      },
      {
        id: 9,
        name: 'تيشيرت-كم طيل-آرت وير-نسائي-ملابس',
        quantity: 1,
        number: 5,
        price: 11700,
        catID: 2,
        imgURL: 'assets/images/picc2@2x.jpg',
      },
      {
        id: 10,
        name: 'تيشيرت-كم طيل-آرت',
        quantity: 1,
        number: 4,
        price: 9700,
        catID: 2,
        imgURL: 'assets/images/pi4@2x.jpg',
      },
      {
        id: 11,
        name: 'تيشيرت-كم طويل-آرت ',
        quantity: 1,
        number: 6,
        price: 7700,
        catID: 2,
        imgURL: 'assets/images/pic-1@2x.png',
      },
      {
        id: 12,
        name: 'تيشيرت-كم طويل-آرت وير-نسائى',
        quantity: 1,
        number: 8,
        price: 9700,
        catID: 1,
        imgURL: 'assets/images/pic-6@2x.jpg',
      },
      {
        id: 13,
        name: 'تيشيرت-كم طويل-آرت وير-نسائى',
        quantity: 1,
        number: 7,
        price: 15000,
        catID: 2,
        imgURL: 'assets/images/pic@2x.jpg',
      },
      {
        id: 14,
        name: 'تيشيرت-كم طويل-آرت وير-نسائى',
        quantity: 1,
        number: 5,
        price: 5700,
        catID: 1,
        imgURL: 'assets/images/picc@2x.jpg',
      },
      {
        id: 15,
        name: 'تيشيرت-كم طويل-آرت وير-نسائى',
        quantity: 1,
        number: 3,
        price: 10000,
        catID: 2,
        imgURL: 'assets/images/piccc@2x.jpg',
      },
      {
        id: 16,
        name: 'تيشيرت-كم طويل-آرت وير-نسائى',
        quantity: 1,
        number: 3,
        price: 12700,
        catID: 2,
        imgURL: 'assets/images/piccc@2x.jpg',
      },
    ];
  }

  // get all products
  getAllProducts(): Iproduct[] {
    return this.products;
  }

  //function for return product by category Id
  getProductBycatId(catId: number): Iproduct[] {
    if (catId == 0) {
      return this.getAllProducts();
    } else {
      return this.products.filter((prd) => prd.catID == catId);
    }
  }

  // function get product by id
  getProductById(id: number) {
    return this.products.find((prd) => prd.id == id);
  }

  // function get product by name
  searchPrdByName(name: string) {
    return this.products.find((prd) => prd.name == name);
  }

  // function get products of id
  getproducts() {
    return this.products.map((prd) => prd.id);
  }
  // function get prdlist of id
  getPrdList() {
    return this.products.map((prd) => prd.id);
  }
}
