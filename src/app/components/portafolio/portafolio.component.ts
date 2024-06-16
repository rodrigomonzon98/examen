import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {

  constructor(private router: Router) {}

  navigateToHojaDeVida() {
    this.router.navigate(['/hojadevida']); // Navega a la ruta '/hojadevida'
  }

}

