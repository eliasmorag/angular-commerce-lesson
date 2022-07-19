import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //variables
  products: Product[];

  constructor(private productosService: ProductosService) {

  }

  // lo primero que hace
  ngOnInit(): void {
    console.log('ngOnInit')
    // carga productos desde la api

    this.productosService.getProductos()
      .subscribe(respuesta => { console.log(respuesta); this.products = respuesta; });

  }

  share() {
    alert('The product has been shared!');
  }

  alertarNotificacion() {
    alert("emitido desde el hijo");
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/