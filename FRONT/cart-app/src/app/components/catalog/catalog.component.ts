import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SharingDataService } from '../../services/sharing-data.service';
import { ProductService } from '../../services/product.service';
import { responseLibros } from '../../models/libro';
import { catchError, finalize, throwError } from 'rxjs';

@Component({
  selector: 'catalog',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit {

  responseLibros!: responseLibros[];
  cargando = false;

  constructor(
    private productService: ProductService,
    private sharingDataService: SharingDataService) { }
  
  ngOnInit(): void {
      this.getAllBooks();
  }

  onAddCart(product: responseLibros) {
    this.sharingDataService.productEventEmitter.emit(product);
  }

  getAllBooks() {
    this.productService.findAllLibros()
    .pipe(
      finalize(() => this.cargando = false),
      catchError(error => {
        return throwError(error);
      })
    )
    .subscribe(result => {
      console.log(result);
      this.responseLibros = result;
      console.log(this.responseLibros);
    })
  }

}
