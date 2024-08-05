import { Injectable } from '@angular/core';
import { ProductModel } from '../Models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  pro1 = {
    id: 1,
    name: 'Combo 1',
    quantity: 1,
    price: 70000,
    inStock: 50,
    img: '../assets/anh1.png',
  };
  pro2 = {
    id: 2,
    name: 'Hamburger',
    quantity: 1,
    price: 30000,
    inStock: 30,
    img: '../assets/anh2.png',
  };
  pro3 = {
    id: 3,
    name: 'Combo 2',
    quantity: 1,
    price: 90000,
    inStock: 100,
    img: '../assets/anh7.png',
  } as ProductModel;
  pro4 = {
    id: 4,
    name: 'Gà rán',
    quantity: 1,
    price: 30000,
    inStock: 100,
    img: '../assets/anh3.png',
  } as ProductModel;
  pro5 = {
    id: 5,
    name: 'Combo 3',
    quantity: 1,
    price: 120000,
    inStock: 100,
    img: '../assets/anh4.png',
  } as ProductModel;
  pro6 = {
    id: 6,
    name: 'Combo 4',
    quantity: 1,
    price: 150000,
    inStock: 100,
    img: '../assets/anh8.png',
  } as ProductModel;
  pro7 = {
    id: 7,
    name: 'Combo 5',
    quantity: 1,
    price: 120000,
    inStock: 100,
    img: '../assets/anh6.png',
  } as ProductModel;

  total: number = 0;
  products: ProductModel[] = [
    this.pro1,
    this.pro2,
    this.pro3,
    this.pro4,
    this.pro5,
    this.pro6,
    this.pro7,
  ];
  cart: ProductModel[] = [];

  addToCart(index: number) {
    let findIndex = this.cart.findIndex((element) => {
      return element.id == this.products[index].id;
    }); // Đi tìm trong giỏ hàng có tồn tại sp mà mình muốn thêm hay không
    if (findIndex != -1) {
      // Nếu tồn tại (index != -1)
      this.cart[findIndex].quantity += 1;
      if (this.products[index].inStock <= 0) {
        return;
      } else {
        this.products[index].inStock--;
      } // Tăng số lượng lên 1
    } else {
      // Nếu không tồn tại
      this.cart.push({
        // Thêm sp mới đó vào
        id: this.products[index].id,
        name: this.products[index].name,
        price: this.products[index].price,
        inStock: this.products[index].price,
        quantity: 1,
        img: this.products[index].img,
      });
      this.products[index].inStock--;
    }
    console.log(this.cart);
    this.totalcost();
  }

  deletefromCart(index: number) {
    let findIndex: any = this.products.find((element) => {
      return element.id == this.cart[index].id;
    });
    if (this.cart[index].quantity > 0) {
      this.cart[index].quantity--;
      findIndex.inStock++;
    }

    if (this.cart[index].quantity == 0) {
      this.cart.splice(index, 1);
    }
    this.totalcost();
  }

  totalcost() {
    this.total = 0;

    for (let i = 0; i < this.cart.length; i++) {
      this.total = this.total + this.cart[i].price * this.cart[i].quantity;
    }
  }
}
