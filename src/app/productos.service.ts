import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //variables
  URL_API = `${environment.API_URL}/productos`;

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

