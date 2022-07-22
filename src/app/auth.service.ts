import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(credenciales) {
    sessionStorage.setItem('user-tienda', credenciales.username);
    console.log('Sesion iniciada...');
  }

  logout() {
    sessionStorage.removeItem('user-tienda');
    this.router.navigate(["/login"]);
    console.log('Sesion finalizada...')
  }

  get estaAutenticado(): boolean {
    return !!sessionStorage.getItem('user-tienda');
  }
}
