import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //variables
  URL_API = 'http://172.16.2.205:8080/productos';

  constructor(private http: HttpClient) { }


  // metodos
  getProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL_API);
  }

  // http://172.16.3.7:8080/productos/{id};
  getProductoById(id: number): Observable<Product> {
    return this.http.get<Product>(this.URL_API + "/" + id);
  }
}

