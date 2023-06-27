import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLoggedIn: boolean = false; // Variable de estado para controlar el inicio de sesión

  constructor(private router: Router) { }

  goToLoginPage() {
    this.isLoggedIn = true; // Actualizar el estado de inicio de sesión
    this.router.navigateByUrl('/login');
  }
}