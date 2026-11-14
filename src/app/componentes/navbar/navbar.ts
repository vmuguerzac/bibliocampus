import { Component, inject } from '@angular/core';
import { PrestamoService } from '../../servicios/prestamo-service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected prestamos = inject(PrestamoService);
  
  nombre:string = "Victor M.";
  rol:string = "ESTUDIANTE";
}
