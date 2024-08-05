import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../Models/product.model';
import { StoreService } from '../../Services/store.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() product!: ProductModel;
  @Output() addToCartEvent = new EventEmitter<string>();

  constructor() {}

  addToCart() {
    this.addToCartEvent.emit('add me pls!!!');
  }
}
