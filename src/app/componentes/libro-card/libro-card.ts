import { Component, computed, input, output, signal } from '@angular/core';
import { Libro } from '../../modelos/libro';

@Component({
  selector: 'app-libro-card',
  imports: [],
  templateUrl: './libro-card.html',
  styleUrl: './libro-card.css',
})
export class LibroCard {
  // Comunicacion Padre -> Hijo
  libro = input.required<Libro>();
  // Comunicacion Hijo -> Padre
  prestamoSolicitado = output<Libro>();

  protected agotado = computed(() => this.libro().copiasDisponibles === 0);
  protected etiqueta = computed(()=>
    this.agotado() ? 'Agotado':`Dispobile · ${this.libro().copiasDisponibles} ${this.libro().copiasDisponibles === 1? 'copia':'copias'}`
  );

  protected alSolicitarHijo():void {
    this.prestamoSolicitado.emit(this.libro());
  }



}
