import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-boton-notificar',
  templateUrl: './boton-compartir.component.html',
  styleUrls: ['./boton-compartir.component.css']
})
export class BotonCompartirComponent implements OnInit {

  @Input()
  producto: any;

  @Output()
  notificacion = new EventEmitter()

  constructor() { }


  ngOnInit() {
  }

  notificarAPadre(): void {
    this.notificacion.emit();
  }

}

