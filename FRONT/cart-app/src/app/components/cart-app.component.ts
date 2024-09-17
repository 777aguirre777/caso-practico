import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CatalogComponent } from './catalog/catalog.component';
import { CartItem } from '../models/cartItem';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { SharingDataService } from '../services/sharing-data.service';
import Swal from 'sweetalert2';
import { VentasService } from '../services/ventas.service';
import { catchError, finalize, throwError } from 'rxjs';
import { responseVenta } from '../models/venta';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogComponent, NavbarComponent, RouterOutlet],
  templateUrl: './cart-app.component.html'
})
export class CartAppComponent implements OnInit {

  items: CartItem[] = [];
  responseVenta!: responseVenta;
  total: number = 0;
  cargando = false;
  constructor(
    private router: Router,
    private sharingDataService: SharingDataService,
    private service: VentasService) { }

  ngOnInit(): void {
    this.items = JSON.parse(sessionStorage.getItem('cart') || '[]');
    this.calculateTotal();
    this.onDeleteCart();
    this.saveVenta();
    this.onAddCart();
  }

  onAddCart(): void {
    this.sharingDataService.productEventEmitter.subscribe(responseLibro => {
      const hasItem = this.items.find(item => item.responseLibro.id === responseLibro.id);
      if (hasItem) {
        this.items = this.items.map(item => {
          if (item.responseLibro.id === responseLibro.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item;
        })
      } else {
        this.items = [... this.items, { responseLibro: { ...responseLibro }, quantity: 1 }];
      }
  
      this.calculateTotal();
      this.saveSession();
      this.router.navigate(['/cart'], {
        state: {items: this.items, total: this.total}
      })

      Swal.fire({
        title: "Shopping Cart",
        text: "Nuevo producto agregado al carro!",
        icon: "success"
      });
    });
  }

  saveVenta(): void {
    console.log("entrando");
    this.sharingDataService.saveVentaEventEmitter.subscribe(product => {
      console.log(product.idLibro + ' se ha ejecutado el evento addVentaEventEmitter')

      Swal.fire({
        title: "Esta seguro que desea comprar?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, comprar!"
      }).then((result) => {
        if (result.isConfirmed) {

          //
          this.service.saveVenta(product)
          .pipe(
            finalize(() => this.cargando = false),
            catchError(error => {
              Swal.fire({
                title: "Error!",
                text: "Se produjo un error.",
                icon: "warning"
              });
              return throwError(error);
            })
          )
          .subscribe(result => {
            console.log(result);
            this.responseVenta = result;
            //console.log(this.responseLibros);
            if(result.id != null){
              this.items = this.items.filter(item => item.responseLibro.id !== product.idLibro);
              if (this.items.length == 0) {
                sessionStorage.removeItem('cart');
                sessionStorage.clear();
              }
              this.calculateTotal();
              this.saveSession();
    
              this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/cart'], {
                  state: { items: this.items, total: this.total }
                })
              })
    
              Swal.fire({
                title: "Comprado!",
                text: "Se ha comprado el item del carrito de compras.",
                icon: "success"
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "Se produjo un error.",
                icon: "warning"
              });
            }
          })
          //


        }
      });
    })
  }

  onDeleteCart(): void {
    this.sharingDataService.idProductEventEmitter.subscribe(id => {
      console.log(id + ' se ha ejecutado el evento idProductEventEmitter')

      Swal.fire({
        title: "Esta seguro que desea eliminar?",
        text: "Cuidado el item se eliminara del carro de compras!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {


          this.items = this.items.filter(item => item.responseLibro.id !== id);
          if (this.items.length == 0) {
            sessionStorage.removeItem('cart');
            sessionStorage.clear();
          }
          this.calculateTotal();
          this.saveSession();

          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/cart'], {
              state: { items: this.items, total: this.total }
            })
          })

          Swal.fire({
            title: "Eliminado!",
            text: "Se ha eliminado el item del carrito de compras.",
            icon: "success"
          });
        }
      });
    })
  }

  calculateTotal(): void {
    this.total = this.items.reduce((accumulator, item) => accumulator + item.quantity * item.responseLibro.price, 0);
  }

  saveSession(): void{
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

}
