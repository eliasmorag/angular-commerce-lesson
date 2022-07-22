import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BotonCompartirComponent } from './boton-compartir/boton-compartir.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { HttpClientModule } from '@angular/common/http';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "./auth.guard";
import { FormularioProductoComponent } from './formulario-producto/formulario-producto.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule, // <------ AGREGAR

    // RUTAS DE LA APLICACION
    RouterModule.forRoot([
      { path: '', redirectTo: 'productos', pathMatch: 'full'},
      { path: 'productos', component: ProductListComponent },
      { path: 'detalle/:idProducto', component: DetalleProductoComponent },
      { path: 'carrito', component: CarritoComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'formulario', component: FormularioProductoComponent },
      { path: 'formulario/:idProducto', component: FormularioProductoComponent },
    ])

    
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    BotonCompartirComponent,
    DetalleProductoComponent,
    CarritoComponent,
    LoginComponent,
    FormularioProductoComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/