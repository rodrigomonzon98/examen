// Importaciones necesarias
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private router: Router) {}

  navigateToPortafolio() {
    this.router.navigate(['/portafolio']); // Navega a la ruta '/portafolio'
  }

  navigateToHojaDeVida() {
    this.router.navigate(['/hojadevida']); // Navega a la ruta '/hojadevida'
  }
}


