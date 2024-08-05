import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoreService } from '../../Services/store.service';
import { ProductModel } from '../../Models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  @Input() product!: ProductModel;
  @Output() deleteInCartEvent = new EventEmitter<string>();

  constructor(public storeService: StoreService) {}

  deleteInCart() {
    this.deleteInCartEvent.emit('delete me pls');
  }
}
