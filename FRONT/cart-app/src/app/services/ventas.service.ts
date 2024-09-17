import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { responseVenta, saveVenta } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(
    private http:HttpClient
  ) { }

  saveVenta(save: any): Observable<responseVenta>{
    return this.http.post<responseVenta>('http://localhost:8090/api/venta/addVenta', save);
  }
}
