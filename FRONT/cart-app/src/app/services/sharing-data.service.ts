import { EventEmitter, Injectable } from '@angular/core';
import { responseLibros } from '../models/libro';
import { saveVenta } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _idProductEventEmitter: EventEmitter<number> = new EventEmitter();

  private _productEventEmitter: EventEmitter<responseLibros> = new EventEmitter();

  private _saveVentaEventEmitter: EventEmitter<saveVenta> = new EventEmitter();
  
  constructor() { }

  get productEventEmitter(): EventEmitter<responseLibros> {
    return this._productEventEmitter;
  }

  get idProductEventEmitter(): EventEmitter<number> {
    return this._idProductEventEmitter;
  }

  get saveVentaEventEmitter(): EventEmitter<saveVenta> {
    return this._saveVentaEventEmitter;
  }
}
