import { Component, signal } from '@angular/core';
import { LibroCard } from '../libro-card/libro-card';

@Component({
  selector: 'app-libro-lista',
  imports: [LibroCard],
  templateUrl: './libro-lista.html',
  styleUrl: './libro-lista.css',
})
export class LibroLista {
  protected terminoBusqueda = signal('');
  protected borrador = signal('');

  protected alEscribir(evento:Event):void {
    this.borrador.set((evento.target as HTMLInputElement).value);
  }
  
  protected alBuscar():void {
    this.terminoBusqueda.set(this.borrador().trim());
  }
}
