import { computed, inject, Injectable, signal } from '@angular/core';
import { LibroService } from './libro-service';
import { Prestamo } from '../modelos/prestamo';
import { Observable, tap } from 'rxjs';
import { Libro } from '../modelos/libro';

@Injectable({
  providedIn: 'root',
})
export class PrestamoService {
  private libroService = inject(LibroService);
  // la unica forma de acceder al arreglo es mediante funciones
  private _prestamos = signal<Prestamo[]>([]);
  // metodos de solo lectura para mostrar la informaicon de prestamos
  readonly prestamos = this._prestamos.asReadonly();
  readonly activos = computed(()=> this._prestamos().filter((prestamo) => prestamo.estado === 'ACTIVO').length);

  // Solicitar prestamo
  solicitar(libro:Libro):Observable<void> {
    return this.libroService.descontarCopia(libro.id).pipe(
      tap(()=>
        this._prestamos.update((listaPrestamos) => [
          ...listaPrestamos, 
          {
            id: Date.now(),
            libroId: libro.id,
            usuarioId: 1,
            fecha: new Date().toLocaleDateString(),
            estado: 'ACTIVO',
            libro
          }
        ])
      )
    );
  }
}
