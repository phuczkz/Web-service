import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
export interface Item {
  id :number;
  name: String;
  quantity: number;
  price: number;
  inStock :number;
  img :string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = "Web ban hang"

  obj1 = { id: 1, name: 'Combo 1', quantity: 0, price: 70000 ,inStock:50, img: '../assets/anh1.png' } as Item;
  obj2 = { id: 2, name: 'Hamburger', quantity: 0, price: 30000 ,inStock:30,img: '../assets/anh2.png' } as Item;
  obj3 = { id: 3, name: 'Combo 2', quantity: 0, price: 90000 ,inStock:100,img: '../assets/anh7.png' } as Item;
  obj4 = { id: 4, name: 'Gà rán', quantity: 0, price: 30000 ,inStock:100,img: '../assets/anh3.png' } as Item;


  total :number = 0;
  products: Item[] = [this.obj1, this.obj2, this.obj3, this.obj4]
  cart: Item[] = []



  addToCart(index: number) {
    let findIndex = this.cart.findIndex((element) => {
      return element.id == this.products[index].id;
    }); // Đi tìm trong giỏ hàng có tồn tại sp mà mình muốn thêm hay không
    if (findIndex != -1) {// Nếu tồn tại (index != -1)
      this.cart[findIndex].quantity += 1;
      if(this.products[index].inStock <= 0){
        return;
      }else{
        this.products[index].inStock--;
      } // Tăng số lượng lên 1
    } else {// Nếu không tồn tại
      this.cart.push({// Thêm sp mới đó vào
        id: this.products[index].id,
        name: this.products[index].name,
        price: this.products[index].price,
        inStock : this.products[index].price,
        quantity: 1,
        img: '../assets/1.1',
      });
      this.products[index].inStock--;
    }
    console.log(this.cart);
    this.totalcost();
  }

  deletefromCart (index:number){
    let findIndex:any = this.products.find((element) => {
      return element.id == this.cart[index].id;
    });
    if (this.cart[index].quantity > 0){
      this.cart[index].quantity--;
      findIndex.inStock ++;
    }

    if(this.cart[index].quantity == 0){
      this.cart.splice(index,1);
    }
    this.totalcost();
  }

  totalcost (){
    this.total = 0;

    for (let i = 0; i<this.cart.length;i++){
      this.total = this.total + this.cart[i].price * this.cart[i].quantity;
    }
  }
}
