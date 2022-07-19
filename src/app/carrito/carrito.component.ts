import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CarritoService } from '../carrito.service';
import { Product } from '../products';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  //variables
  items: Product[] = [];


  // La estructura es "nombreCampo: valor inicial del campo"
  formularioCheckout = this.formBuilder.group({
    nombre: '',
    direccion: ''
  });

  constructor(
    private carrito: CarritoService,
    private formBuilder: FormBuilder
  ) { } // inyecto el service

  ngOnInit(): void {
    this.items = this.carrito.obtenerItems();
  }

  // metodos
  finalizarCompra() {

    console.log("formulario", this.formularioCheckout.value);
    console.log("items", this.items);

  }

}
