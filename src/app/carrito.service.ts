import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  //variables
  items: Product[] = [];

  constructor() { }

  //metodos

  agregarACarrito(producto: Product) {
    this.items.push(producto);
    console.log('Carrito', this.items);
  }

  obtenerItems() {
    return this.items;
  }

  vaciarCarrito() {
    this.items = [];
    console.log('Carrito', this.items);
    return this.items;
  }
}
