import { Injectable } from '@angular/core';
import { responseLibros } from '../models/libro';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http:HttpClient
  ) { }

  findAllLibros(): Observable<responseLibros[]>{
    return this.http.get<responseLibros[]>('http://localhost:8090/api/libros/listarLibros');
  }
}
