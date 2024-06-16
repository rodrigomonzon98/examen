import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hojadevida',
  standalone: true,
  imports: [],
  templateUrl: './hojadevida.component.html',
  styleUrl: './hojadevida.component.css'
})
export class HojadevidaComponent {

  constructor(private router: Router) {}

  navigateToPortafolio() {
    this.router.navigate(['/portafolio']); // Navega a la ruta '/portafolio'
  }

}
