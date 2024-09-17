import { Component, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { saveVenta } from '../../models/venta';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html'
})
export class CartComponent {
  
  items: CartItem[] = [];
  saveVenta!: saveVenta;

  total = 0;
    
  constructor(private sharingDataService: SharingDataService, private router: Router) {
    this.items = this.router.getCurrentNavigation()?.extras.state!['items'];
    this.total = this.router.getCurrentNavigation()?.extras.state!['total'];
  }

  onDeleteCart(id: number) {
    this.sharingDataService.idProductEventEmitter.emit(id);
  }

  onSaveVenta(item: CartItem) {

    this.saveVenta = {cantidad: item.quantity, idLibro: item.responseLibro.id, precio: item.responseLibro.price, valorVenta: item.responseLibro.price * item.quantity};
    console.log(this.saveVenta);
    this.sharingDataService.saveVentaEventEmitter.emit(this.saveVenta);
  }

}
