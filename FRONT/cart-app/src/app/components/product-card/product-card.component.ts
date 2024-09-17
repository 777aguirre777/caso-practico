import { Component, EventEmitter, Input, Output } from '@angular/core';
import { responseLibros } from '../../models/libro';

@Component({
  selector: 'div[product-card]',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

  @Input() responseLibro!: responseLibros;

  @Output() productEventEmitter: EventEmitter<responseLibros> = new EventEmitter();
  
  onAddCart(product: responseLibros) {
    this.productEventEmitter.emit(product);
  }
}
