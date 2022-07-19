import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap } from 'rxjs';
import { CarritoService } from '../carrito.service';
import { ProductosService } from '../productos.service';
import { Product } from '../products';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  //variables
  idProducto: number;
  producto: Product;


  constructor(
    private route: ActivatedRoute,
    private service: ProductosService,
    private carrito: CarritoService
  ) { }

  //metodos

  //on init es lo primero que se ejecuta
  ngOnInit(): void {
    const parametrosRuta = this.route.snapshot.paramMap;
    this.idProducto = +parametrosRuta.get("idProducto");

    this.service.getProductoById(this.idProducto)
      .subscribe(respuesta => this.producto = respuesta);
  }

  comprarProducto(producto: Product) {
    this.carrito.agregarACarrito(producto);
    alert('Tu producto se ha agregado al carrito!');
  }
}



// nombreMetodo(parametro1, parametro2 ) {

// }